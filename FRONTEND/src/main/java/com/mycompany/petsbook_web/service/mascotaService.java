package com.mycompany.petsbook_web.service;

import com.mycompany.petsbook_web.dao.mascotaDAO;
import com.mycompany.petsbook_web.modelo.mascota;
import java.util.List;

/**
 * Esta clase sirve como filtro entre el Servlet y la Base de Datos.
 * Su función es revisar que los datos estén bien antes de guardarlos o cambiarlos.
 */
public class mascotaService {

    private final mascotaDAO dao = new mascotaDAO();

    /**
     * Pide al DAO que guarde la mascota, pero solo si pasa las validaciones.
     */
    public void guardar(mascota mascota) {
        if (mascota != null && esValido(mascota)) {
            dao.guardar(mascota);
        }
    }

    /**
     * Trae la lista completa de mascotas desde el DAO.
     */
    public List<mascota> listar() {
        return dao.listar();
    }

    /**
     * Pide al DAO que busque una mascota por su ID para poder editarla.
     */
    public mascota buscarPorId(int id) {
        return dao.buscarPorId(id);
    }

    /**
     * Pide al DAO que actualice los datos de una mascota ya registrada.
     */
    public void actualizar(mascota mascota) {
        if (mascota != null && esValido(mascota)) {
            dao.actualizar(mascota);
        }
    }

    /**
     * Pide al DAO que elimine una mascota usando su ID.
     */
    public void eliminar(int id) {
        if (id > 0) {
            dao.eliminar(id);
        }
    }

    /**
     * Reglas básicas para que una mascota sea válida:
     * 1. Debe tener un nombre.
     * 2. Debe tener un tipo (especie).
     * 3. La edad no puede ser un número negativo.
     */
    private boolean esValido(mascota mascota) {

        if (mascota.getNombre() == null || mascota.getNombre().trim().isEmpty()) {
            return false;
        }

        if (mascota.getTipo() == null || mascota.getTipo().trim().isEmpty()) {
            return false;
        }

        if (mascota.getEdad() < 0) {
            return false;
        }

        return true;
    }
}