import React from 'react';

const Usuario = ({ usuario }) => {
    // Tomamos la inicial del nombre para el avatar
    const inicial = usuario.nombre ? usuario.nombre.charAt(0).toUpperCase() : '?';

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            padding: '10px 0'
        }}>
            {/* Avatar circular con estilo de red social */}
            <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#3498db',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
                {inicial}
            </div>

            {/* Informacion del perfil */}
            <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0, color: '#2c3e50', fontSize: '1.1rem' }}>{usuario.nombre}</h4>
                <p style={{ margin: 0, color: '#7f8c8d', fontSize: '0.85rem' }}>{usuario.email}</p>
                <small style={{ color: '#95a5a6' }}>Cédula: {usuario.cedula}</small>
            </div>
        </div>
    );
};

export default Usuario;