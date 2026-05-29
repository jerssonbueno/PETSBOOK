const express = require('express');
const router = express.Router();
const { registerUser, getUsers } = require('../controllers/userController');

// Ruta para registrar
router.post('/register', registerUser);

// Ruta para obtener la lista (la que usara ListaUsuarios.js)
router.get('/', getUsers);

module.exports = router;