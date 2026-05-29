import React, { useState } from 'react';
import axios from 'axios';

const RegistroMascota = () => {
    const [nombre, setNombre] = useState('');
    const [especie, setEspecie] = useState('');
    const [raza, setRaza] = useState('');
    const [edad, setEdad] = useState('');
    const [userId, setUserId] = useState(''); // ID del dueño

    const manejarEnvio = async (e) => {
        e.preventDefault();
        try {
            const nuevaMascota = { nombre, especie, raza, edad: parseInt(edad), userId: parseInt(userId) };
            const respuesta = await axios.post('http://localhost:3000/api/pets/register', nuevaMascota);
            alert(respuesta.data.message);
            // Limpiar campos
            setNombre(''); setEspecie(''); setRaza(''); setEdad(''); setUserId('');
        } catch (error) {
            console.error('Error al registrar mascota:', error);
            alert('No se pudo registrar la mascota');
        }
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#e9ecef', borderRadius: '10px', marginTop: '20px' }}>
            <h3>Registrar Nueva Mascota 🐾</h3>
            <form onSubmit={manejarEnvio}>
                <input type="text" placeholder="Nombre de la mascota" value={nombre} onChange={(e) => setNombre(e.target.value)} required /><br /><br />
                <input type="text" placeholder="Especie (Perro, Gato...)" value={especie} onChange={(e) => setEspecie(e.target.value)} required /><br /><br />
                <input type="text" placeholder="Raza" value={raza} onChange={(e) => setRaza(e.target.value)} /><br /><br />
                <input type="number" placeholder="Edad" value={edad} onChange={(e) => setEdad(e.target.value)} /><br /><br />
                <input type="number" placeholder="ID del Dueño (Número)" value={userId} onChange={(e) => setUserId(e.target.value)} required /><br /><br />
                <button type="submit" style={{ backgroundColor: '#28a745', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}>
                    Guardar Mascota
                </button>
            </form>
        </div>
    );
};

export default RegistroMascota;