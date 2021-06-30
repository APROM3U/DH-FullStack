var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/service', (req, res) => {
  const {taxaDesc} = req.query;
  const listaServDesc = serviceController(taxa);

})

module.exports = router;
