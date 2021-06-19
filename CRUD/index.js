const express = require('express');
const app = express();

app.use(express.json());

const port = 3000;

const userAlexandre = {
    id: 0,
    nome: 'Alexandre',
    idade: 35
};

const usuarios = [userAlexandre];

// Obter lista
app.get('/usuarios', (req, res) =>{
    res.json(usuarios);
});

// Atualiza lista
app.post('/usuarios', (req, res) =>{
    const {nome, idade} = req.body;
    const id = usuarios.length;

    const novoUser = {
        id,
        nome,
        idade
    };

    usuarios.push(novoUser);

    res.status(200).json(novoUser);

});

// acessar parametro
app.put('/usuarios/:id', (req, res) =>{
    const {id} = req.params;
    const {nome, idade} = req.body;

    const usuario = usuarios.find(usuario => usuario.id === Number(id));

    usuario.nome = nome;
    usuario.idade = idade;

    res.json(usuario);

});

// remove o parametro
app.delete('/usuarios/:id', (req, res) =>{
    const {id} = req.params;
    const index = usuarios.findIndex(usuario => usuario.id === Number(id));
    usuarios.splice(index,1);
    res.status(204).send();
});

// Server ativo (npx nodemon "index.js | -> nome_arquivo")
app.listen(port, () =>{
    console.log(`Server is up and running on port ${port}`);
});