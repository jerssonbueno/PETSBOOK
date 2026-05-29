import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Usuario from './Usuario';

const ListaUsuarios = () => {
    // Estado para almacenar los usuarios traidos desde la base de datos
    const [usuarios, setUsuarios] = useState([]);

    // Efecto para cargar los usuarios apenas se monta el componente
    useEffect(() => {
        obtenerUsuarios();
    }, []);

    // Funcion para realizar la peticion get al servidor backend
    const obtenerUsuarios = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/api/users');
            setUsuarios(respuesta.data);
        } catch (error) {
            console.error('Error al obtener los usuarios:', error);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Registros en el Sistema</h2>
            
            <hr />

            {/* Validacion para mostrar los registros o un mensaje de lista vacia */}
            {usuarios.length === 0 ? (
                <p>No hay registros en la base de datos actualmente.</p>
            ) : (
                usuarios.map((u, index) => (
                    <div key={u.id || index} style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px', borderRadius: '8px', textAlign: 'left' }}>
                        {/* Mostramos el ID resaltado para poder usarlo en el registro de mascotas */}
                        <span style={{ backgroundColor: '#ffc107', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                            ID: {u.id}
                        </span>
                        <Usuario usuario={u} />
                    </div>
                ))
            )}
        </div>
    );
};

export default ListaUsuarios;