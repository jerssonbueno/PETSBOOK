import React from 'react';

const Navbar = () => {
    return (
        <nav style={{
            backgroundColor: '#2c3e50',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
            {/* Logo o nombre de la red social */}
            <h2 style={{ margin: 0, fontSize: '1.5rem' }}>PetsBook</h2>
            
            {/* Enlaces de navegacion simulados para la red social */}
            <ul style={{
                display: 'flex',
                listStyle: 'none',
                gap: '20px',
                margin: 0
            }}>
                <li style={{ cursor: 'pointer' }}>Inicio</li>
                <li style={{ cursor: 'pointer' }}>Mascotas</li>
                <li style={{ cursor: 'pointer' }}>Mi Perfil</li>
            </ul>
        </nav>
    );
};

export default Navbar;