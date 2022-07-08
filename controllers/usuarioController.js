import { check, validationResult } from "express-validator";
import Usuario from "../models/Usuario.js";

const formularioLogin = (req, res) => {
  res.render("auth/login", {
    pagina: "Iniciar sesión",
  });
};

const formularioRegistro = (req, res) => {
  res.render("auth/registro", {
    pagina: "Crear Cuenta",
  });
};

const registrar = async (req, res) => {
  //console.log(req.body);

  // Validación
  await check("nombre")
    .notEmpty()
    .withMessage("El nombre no puede ir vacio")
    .run(req);

  await check("email")
    .isEmail()
    .withMessage("Introduce un mail válido")
    .run(req);

  await check("password")
    .isLength({ min: 6 })
    .withMessage("Password minimo de 6 caracteres")
    .run(req);

  /*  await check("repetir_password")
    .equals("password")
    .withMessage("El password no coincide")
    .run(req);
 */
  let resultado = validationResult(req);
  // Verificar que el resultado este vacio
  if (!resultado.isEmpty()) {
    //Errores
    return res.render("auth/registro", {
      pagina: "Crear Cuenta",
      errores: resultado.array(),
      usuario: {
        nombre: req.body.nombre,
        email: req.body.email,
      },
    });
  }
  // Extraer los datos
  const { nombre, email, password } = req.body;

  // Verificar que el usuario no este duplicado

  const existeUsuario = await Usuario.findOne({
    where: { email },
  });
  if (existeUsuario) {
    return res.render("auth/registro", {
      pagina: "Crear Cuenta",
      errores: [{ msg: "Este usuario ya está registrado" }],
      usuario: {
        nombre: req.body.nombre,
        email: req.body.email,
      },
    });
  }

  console.log(existeUsuario);

  //return;
  //res.json(resultado.array());
  // Almacenar un usuario
  //const usuario = 
  await Usuario.create({
    nombre,
    email,
    password,
    token: 123,
  });
  // res.json(usuario);
};

const formularioOlvidePassword = (req, res) => {
  res.render("auth/olvide-password", {
    pagina: "Recupera tu cuenta",
  });
};

export {
  formularioLogin,
  formularioRegistro,
  registrar,
  formularioOlvidePassword,
};
