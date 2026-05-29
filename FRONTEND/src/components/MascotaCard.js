import React from 'react';

const MascotaCard = ({ mascota }) => {
    // Inicial para el avatar de la mascota
    const inicial = mascota.nombre ? mascota.nombre.charAt(0).toUpperCase() : '?';

    return (
        <div className="profile-card" style={{
            backgroundColor: '#fff9f1', 
            border: '1px solid #ffe4bc',
            margin: '10px 0',
            borderRadius: '12px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Avatar de la mascota */}
            <div className="avatar" style={{ backgroundColor: '#e67e22' }}>
                {inicial}
            </div>

            {/* Informacion detallada */}
            <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0, color: '#d35400', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {mascota.nombre} 🐾
                </h4>
                <p style={{ margin: '2px 0', color: '#7f8c8d', fontSize: '0.9rem' }}>
                    <strong>Especie:</strong> {mascota.especie} | <strong>Raza:</strong> {mascota.raza}
                </p>
                <small style={{ color: '#bdc3c7' }}>Dueño (ID): {mascota.userId}</small>
            </div>

            {/* Decoracion de huella grande de fondo (opcional) */}
            <div style={{
                position: 'absolute',
                right: '10px',
                bottom: '-5px',
                fontSize: '2rem',
                opacity: '0.1',
                pointerEvents: 'none'
            }}>
                🐾
            </div>
        </div>
    );
};

export default MascotaCard;