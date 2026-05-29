import React from 'react';

const Sugerencias = () => {
    // Lista estática simulada para las sugerencias de amistad en la red social
    const amigosSugeridos = [
        { id: 1, nombre: 'Carlos Mendoza', mascota: 'Max (Golden Retriever)' },
        { id: 2, nombre: 'Ana María Silva', mascota: 'Luna (Gato Persa)' }
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            
            {/* Sección de Servicios Profesionales Destacados */}
            <div className="panel-card" style={{ backgroundColor: '#fff', border: '1px solid #e0dbd5', padding: '15px', borderRadius: '8px' }}>
                <h4 style={{ margin: '0 0 12px 0', color: '#ff6f00', fontSize: '1rem' }}>Servicios Recomendados 🛠️</h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {/* Item de Clínica Veterinaria */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                        <span style={{ fontSize: '1.2rem' }}>🏥</span>
                        <div>
                            <strong style={{ display: 'block', color: '#333' }}>Clínica Veterinaria San Roque</strong>
                            <small style={{ color: '#666' }}>Urgencias 24 Horas</small>
                        </div>
                    </div>

                    {/* Item de Tienda de Mascotas */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                        <span style={{ fontSize: '1.2rem' }}>🛒</span>
                        <div>
                            <strong style={{ display: 'block', color: '#333' }}>PetShop Huellitas</strong>
                            <small style={{ color: '#666' }}>Alimento y accesorios con 10% dcto</small>
                        </div>
                    </div>

                    {/* Item de Paseos y Entrenamientos */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                        <span style={{ fontSize: '1.2rem' }}>🦮</span>
                        <div>
                            <strong style={{ display: 'block', color: '#333' }}>Entrenamiento Canino Pro</strong>
                            <small style={{ color: '#666' }}>Modificación de conducta y paseos</small>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección de Sugerencias de Amistad (Comunidad) */}
            <div className="panel-card" style={{ backgroundColor: '#fff', border: '1px solid #e0dbd5', padding: '15px', borderRadius: '8px' }}>
                <h4 style={{ margin: '0 0 12px 0', color: '#ff6f00', fontSize: '1rem' }}>Sugerencias de amistad 🐾</h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {amigosSugeridos.map(amigo => (
                        <div key={amigo.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f5f0eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', color: '#ff6f00' }}>
                                    {amigo.nombre.charAt(0)}
                                </div>
                                <div>
                                    <strong style={{ display: 'block', color: '#333' }}>{amigo.nombre}</strong>
                                    <span style={{ color: '#777', fontSize: '0.75rem' }}>Duenio de: {amigo.mascota}</span>
                                </div>
                            </div>
                            <button style={{ backgroundColor: '#ff6f00', color: '#fff', border: 'none', padding: '4px 10px', borderRadius: '15px', fontSize: '0.75rem', fontWeight: 'bold', cursor: 'pointer' }}>
                                Seguir
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Sugerencias;