package com.mycompany.petsbook.dao;

import com.mycompany.petsbook.conexion.ConexionBD;
import com.mycompany.petsbook.modelo.Mascota;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class MascotaDAO {

    // INSERTAR
    public void insertar(Mascota mascota) {
        String sql = "INSERT INTO mascota (nombre, tipo, edad) VALUES (?, ?, ?)";

        try (Connection con = ConexionBD.conectar();
             PreparedStatement ps = con.prepareStatement(sql)) {

            ps.setString(1, mascota.getNombre());
            ps.setString(2, mascota.getTipo());
            ps.setInt(3, mascota.getEdad());

            ps.executeUpdate();
            System.out.println("Mascota registrada");

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    // CONSULTAR
    public List<Mascota> listar() {
        List<Mascota> lista = new ArrayList<>();
        String sql = "SELECT * FROM mascota";

        try (Connection con = ConexionBD.conectar();
             Statement st = con.createStatement();
             ResultSet rs = st.executeQuery(sql)) {

            while (rs.next()) {
                Mascota m = new Mascota();
                m.setId(rs.getInt("id"));
                m.setNombre(rs.getString("nombre"));
                m.setTipo(rs.getString("tipo"));
                m.setEdad(rs.getInt("edad"));

                lista.add(m);
            }

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }

        return lista;
    }

    // ACTUALIZAR
    public void actualizar(Mascota mascota) {
        String sql = "UPDATE mascota SET nombre=?, tipo=?, edad=? WHERE id=?";

        try (Connection con = ConexionBD.conectar();
             PreparedStatement ps = con.prepareStatement(sql)) {

            ps.setString(1, mascota.getNombre());
            ps.setString(2, mascota.getTipo());
            ps.setInt(3, mascota.getEdad());
            ps.setInt(4, mascota.getId());

            ps.executeUpdate();
            System.out.println("Mascota actualizada");

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    // ELIMINAR
    public void eliminar(int id) {
        String sql = "DELETE FROM mascota WHERE id=?";

        try (Connection con = ConexionBD.conectar();
             PreparedStatement ps = con.prepareStatement(sql)) {

            ps.setInt(1, id);
            ps.executeUpdate();

            System.out.println("Mascota eliminada");

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}