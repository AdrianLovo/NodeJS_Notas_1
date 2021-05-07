// import express from 'express';      //Forma de importar modulos con ES6

const express = require('express');     //Modulo nativo es require
const router = require('./network/routes');


var app = express();    //Inicializando express
app.use(express.json());
app.use(express.urlencoded({extended: false}));
router(app);




// router.delete('/message', function(req, res){
//     console.log(req.query);
//     console.log(req.body);
//     res.send('Mensaje ' + req.body.text + ' añadido correctamente');

//     RESPUESTAS
//     res.send('');                //Respuesta vacia
//     res.status(201).send();     //Respuesta con un estatus
//     res.status(201).send({          //Respuesta con estatus y datos
//         error: '',
//         body: 'Creado correctamente'
//     });        
// })


app.use('/app', express.static('public'))   //Toda la info publica que queremos mostrar


app.listen(3000)    //Escuchando en el puerto 3000
console.log('La aplicacion esta escuchando en el puerto 3000');