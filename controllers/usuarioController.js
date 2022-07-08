
const formularioLogin = (req, res) => {
    res.render('auth/login', {
        pagina: 'Iniciar sesión'
    })
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina: 'Crear Cuenta'
    })
}

const registrar = (req, res)=>{
    console.log(req.body)
}

const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-password', {
        pagina: 'Recupera tu cuenta'
    })
}

export {
    formularioLogin,
    formularioRegistro,
    registrar,
    formularioOlvidePassword
}