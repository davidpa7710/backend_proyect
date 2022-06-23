
const express = require('express')
const router = express.Router()
const controllerAPI = require('../Controllers/controllerAPI')

// Si la ruta es homes, ejecuta homeController y la funcion createHome

router.post('/products',(controllerAPI.createProduct));
router.get('/products', (controllerAPI.findAllProducts))
router.get('/products/:idProduct', (controllerAPI.findOneProduct))
router.patch('/products/:idProduct', (controllerAPI.updateOneProduct))
router.delete('/products/:idProduct/destroy', (controllerAPI.deleteOneProduct))
router.delete('/products/:idProduct', (controllerAPI.softDeleteOneProduct))

module.exports = router; 