const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Enrutamiento para la petición de ingreso al sistema
router.post('/login', authController.login);

// Enrutamiento para la petición de registro de cuenta nueva
router.post('/register', authController.registrar);

module.exports = router;