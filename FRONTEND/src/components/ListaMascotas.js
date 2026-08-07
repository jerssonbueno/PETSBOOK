import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MascotaCard from './MascotaCard'; 

const ListaMascotas = () => {
    const [mascotas, setMascotas] = useState([]);

    // Efecto para cargar las mascotas apenas se monta el componente
    useEffect(() => {
        obtenerMascotas();
    }, []);

    // Peticion al servidor para traer todos los registros de la tabla Pets
    const obtenerMascotas = async () => {
        try {
            const respuesta = await axios.get('https://petsbook-xrtr.onrender.com/api/pets');
            setMascotas(respuesta.data);
        } catch (error) {
            console.error('Error al traer la lista de mascotas:', error);
        }
    };

    return (
        <div>
            <h3>Mascotas Registradas</h3>
            {mascotas.length === 0 ? (
                <p>No hay mascotas registradas en el sistema actualmente.</p>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    
                    {mascotas.map((pet) => (
                        <MascotaCard key={pet.id} mascota={pet} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListaMascotas;