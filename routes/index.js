import express from 'express'
import lbtc from '../controllers/lbtc'
import { pruebas } from '../controllers/prueba'

const router = express.Router()
// Rutas que generan scrapes (definidas en controller/lbtc.js)
router.get('/scrapeit/mercantil', lbtc.mercantil)
router.get('/scrapeit/banesco', lbtc.banesco)
router.get('/scrapeit/prueba', pruebas.prueba)

// Ruta custom (definidas en controller/lbtc.js)
router.post('/scrapeit', lbtc.custom)

export default router
