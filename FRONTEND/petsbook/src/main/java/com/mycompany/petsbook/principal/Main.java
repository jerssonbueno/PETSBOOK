package com.mycompany.petsbook.principal;

import com.mycompany.petsbook.dao.MascotaDAO;
import com.mycompany.petsbook.modelo.Mascota;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        MascotaDAO dao = new MascotaDAO();

        // INSERTAR
        System.out.println("Insertando...");
        dao.insertar(new Mascota("Max", "Perro", 3));
        dao.insertar(new Mascota("Luna", "Gato", 2));

        // CONSULTAR
        System.out.println("\nLista de mascotas:");
        List<Mascota> lista = dao.listar();

        for (int i = 0; i < lista.size(); i++) {
            Mascota mascota = lista.get(i);
            System.out.println(mascota.getId() + " - " + mascota.getNombre() + " - " + mascota.getTipo());
        }

        // ACTUALIZAR
        System.out.println("\nActualizando...");
        Mascota mascotaActualizar = new Mascota("Maximus", "Perro", 4);
        mascotaActualizar.setId(1);
        dao.actualizar(mascotaActualizar);

        // ELIMINAR
        System.out.println("\nEliminando...");
        dao.eliminar(2);
    }
}