
const express = require('express')
const router = express.Router()
const controllerAPI = require('../Controllers/controllerAPI')

// Si la ruta es homes, ejecuta homeController y la funcion createHome

router.get('/customers',(controllerAPI.createHome));

module.exports = router; 