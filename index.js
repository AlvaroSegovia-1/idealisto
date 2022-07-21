// const express = require("express");  // CommonJS

import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import db from "./config/db.js";
import sequelize from "sequelize";

// Crear la app
const app = express();

// Habilitar lectura de datos de formularios
app.use(express.urlencoded({ extended: true }));

// Conexión a la base de datos
try {
  await db.authenticate();
  db.sync();
  console.log("Conexión correcta a base de datos");
} catch (error) {
  console.log(error);
}

// Habilitar Pug
app.set("view engine", "pug");
app.set("views", "./views");

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

// Carpeta Pública
app.use(express.static("public"));

// Routing
app.use("/auth", usuarioRoutes);

// Definir un puerto y arrancar un proyecto
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`El Servidor está abierto en el puerto ${port}`);
});
