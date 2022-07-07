// const express = require("express");  // CommonJS

import express from "express";
import usuarioRoutes from './routes/usuarioRoutes.js'

const app = express();

// Habilitar Pug
app.set('view engine', 'pug')
app.set('views', './views')

// Routing
/* app.get('/', function(req, res){
    res.send('Hola Mundo en express')

})

app.get('/nosotros', function(req, res){
    //res.json({msg: 'Nosotros'})
    res.render()

})
 */

//app.get('/', usuarioRoutes)

// Routing
app.use('/auth', usuarioRoutes)



// Definir un puerto y arrancar un proyecto
const port = 3000;

app.listen(port, () => {
  console.log(`El Servidor está abierto en el puerto ${port}`);
});
