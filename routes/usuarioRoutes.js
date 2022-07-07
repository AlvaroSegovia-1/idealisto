import express from 'express'
import { formularioLogin, formularioRegistro } from '../controllers/usuarioController.js'

const router = express.Router()

router.get('/login', formularioLogin)
router.get('/registro', formularioRegistro )

/* router.post('/', (req, res)=>{
    res.json({msg: 'Nosotros'})
    res.json({msg: 'Respuesta Post'})
}) */

export default router