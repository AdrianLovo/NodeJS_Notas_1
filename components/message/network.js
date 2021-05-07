const express = require('express');
const response = require('../../network/response');     //Modulo de respuestas estandar
const controller = require('./controller');             //Modulo de controller

const router = express.Router();        //router de express


router.post('/', function(req, res){
    
    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
        response.success(req, res, fullMessage, 201);
    })
    .catch(()=>{
        response.error(req, res, 'Informacion invalida ', 400, 'Error en el contenido');
    })
        
});

router.get('/', function(req, res){
    res.header({
        "custom-header": "Nuestro valor personalizado",
    })
    response.success(req, res, 'Lista de mensajes');   
});

module.exports = router;