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
   
    controller.getMessages()
    .then((messageList) =>{
        response.success(req, res, messageList, 200);
    })  
    .catch(e =>{
        response.error(req, res, 'Unexpected Error', 500, e);
    })

});

module.exports = router;