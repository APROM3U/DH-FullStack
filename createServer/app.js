
const http = require('http');

const porta = 3030;

http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type":"text/plain"});

    switch (req.url){
        case '/':
            res.end('Home');
            break;
        case '/contato':
            res.end('Você está na pág contato');
            break;
        default:
                res.end('Pág não encontrada');
    }
   // res.end("Meu primeiro servidor com node");

    req.url
}).listen(porta,'localhost');
