import express from 'express'
import { formularioLogin, formularioRegistro,formularioOlvidePassword } from '../controllers/usuarioController.js'

const router = express.Router()

router.get('/login', formularioLogin)
router.get('/registro', formularioRegistro )
router.get('/olvide-password', formularioOlvidePassword )


/* router.post('/', (req, res)=>{
    res.json({msg: 'Nosotros'})
    res.json({msg: 'Respuesta Post'})
}) */

export default router