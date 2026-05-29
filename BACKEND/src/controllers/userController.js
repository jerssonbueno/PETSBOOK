const User = require('../models/User');

// Funcion para registrar un nuevo usuario en el sistema
const registerUser = async (req, res) => {
    try {
        const { nombre, apellido, cedula, email, password, rol } = req.body;

        // Creacion del registro en la base de datos
        const newUser = await User.create({
            nombre,
            apellido,
            cedula,
            email,
            password, // Mas adelante aplicaremos encriptacion aqui
            rol
        });

        // Respuesta exitosa al cliente
        res.status(201).json({
            message: 'Usuario registrado con exito',
            user: newUser
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error al registrar el usuario',
            error: error.message
        });
    }
};

// Funcion para obtener todos los usuarios registrados desde MySQL
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ 
            message: 'Error al obtener usuarios', 
            error: error.message 
        });
    }
};

// Exportacion de ambas funciones para ser usadas en las rutas
module.exports = { 
    registerUser, 
    getUsers 
};