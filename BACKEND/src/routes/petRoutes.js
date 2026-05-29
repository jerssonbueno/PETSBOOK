const express = require('express');
const router = express.Router();
const { registerPet, getPets } = require('../controllers/petController');

// Ruta para registrar una mascota (POST)
router.post('/register', registerPet);

// Ruta para ver todas las mascotas (GET)
router.get('/', getPets);

module.exports = router;
