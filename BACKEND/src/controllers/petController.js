const Pet = require('../models/Pet');

// Registro de una nueva mascota vinculada a un dueño por su ID
const registerPet = async (req, res) => {
    try {
        const { nombre, especie, raza, edad, userId } = req.body;

        const nuevaMascota = await Pet.create({
            nombre,
            especie,
            raza,
            edad,
            userId
        });

        res.status(201).json({
            message: 'Mascota registrada con exito',
            pet: nuevaMascota
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al procesar el registro de la mascota',
            error: error.message
        });
    }
};

// Obtencion de todos los registros de mascotas en el sistema
const getPets = async (req, res) => {
    try {
        const mascotas = await Pet.findAll();
        res.json(mascotas);
    } catch (error) {
        res.status(500).json({
            message: 'Error al consultar la lista de mascotas',
            error: error.message
        });
    }
};

module.exports = { registerPet, getPets };