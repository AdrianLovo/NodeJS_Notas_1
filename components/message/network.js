const express = require('express');
const response = require('../../network/response');

const router = express.Router();        //router de express


router.post('/', function(req, res){
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado",
    })
    response.success(req, res, 'Lista de mensajes');
});

router.get('/', function(req, res){
    console.log(req.query);    
    if(req.query.error == 'ok'){
        response.error(req, res, 'Error Inesperado ', 500, 'Es solo una simulacion de los errores');
    }else{
        response.success(req, res, 'Creado correctamente', 201);
    }
});

module.exports = router;