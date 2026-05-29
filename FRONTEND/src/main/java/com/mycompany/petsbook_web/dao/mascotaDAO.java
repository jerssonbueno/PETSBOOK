package com.mycompany.petsbook_web.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import com.mycompany.petsbook_web.conexion.conexion;
import com.mycompany.petsbook_web.modelo.mascota;

/**
 * Clase mascotaDAO: Contiene toda la lógica de base de datos (CRUD).
 * Aquí es donde se ejecutan las sentencias SQL (Insert, Select, Update, Delete).
 * @author Jersson Bueno
 */
public class mascotaDAO {

    /**
     * Guarda una nueva mascota en la base de datos.
     */
    public boolean guardar(mascota m) {
        boolean estado = false;
        try {
            Connection con = conexion.conectar();
            String sql = "INSERT INTO mascota(nombre, edad, tipo) VALUES (?, ?, ?)";
            PreparedStatement ps = con.prepareStatement(sql);

            ps.setString(1, m.getNombre());
            ps.setInt(2, m.getEdad());
            ps.setString(3, m.getTipo());

            ps.executeUpdate();
            estado = true;
            con.close(); // Cerramos la conexión por seguridad
        } catch (Exception e) {
            System.out.println("Error al guardar: " + e.getMessage());
        }
        return estado;
    }

    /**
     * Trae la lista completa de mascotas registradas.
     */
    public List<mascota> listar() {
        List<mascota> lista = new ArrayList<>();
        try {
            Connection con = conexion.conectar();
            String sql = "SELECT * FROM mascota";
            PreparedStatement ps = con.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                mascota m = new mascota();
                m.setId(rs.getInt("id"));
                m.setNombre(rs.getString("nombre"));
                m.setEdad(rs.getInt("edad"));
                m.setTipo(rs.getString("tipo"));
                lista.add(m);
            }
            con.close();
        } catch (Exception e) {
            System.out.println("Error al listar: " + e.getMessage());
        }
        return lista;
    }

    /**
     * Busca una mascota específica usando su ID para poder editarla.
     */
    public mascota buscarPorId(int id) {
        mascota m = null;
        try {
            Connection con = conexion.conectar();
            String sql = "SELECT * FROM mascota WHERE id = ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                m = new mascota();
                m.setId(rs.getInt("id"));
                m.setNombre(rs.getString("nombre"));
                m.setEdad(rs.getInt("edad"));
                m.setTipo(rs.getString("tipo"));
            }
            con.close();
        } catch (Exception e) {
            System.out.println("Error al buscar: " + e.getMessage());
        }
        return m;
    }

    /**
     * Actualiza la información de una mascota ya existente.
     */
    public boolean actualizar(mascota m) {
        boolean estado = false;
        try {
            Connection con = conexion.conectar();
            String sql = "UPDATE mascota SET nombre=?, edad=?, tipo=? WHERE id=?";
            PreparedStatement ps = con.prepareStatement(sql);

            ps.setString(1, m.getNombre());
            ps.setInt(2, m.getEdad());
            ps.setString(3, m.getTipo());
            ps.setInt(4, m.getId());

            ps.executeUpdate();
            estado = true;
            con.close();
        } catch (Exception e) {
            System.out.println("Error al actualizar: " + e.getMessage());
        }
        return estado;
    }

    /**
     * Elimina una mascota definitivamente usando su ID.
     */
    public boolean eliminar(int id) {
        boolean estado = false;
        try {
            Connection con = conexion.conectar();
            String sql = "DELETE FROM mascota WHERE id = ?";
            PreparedStatement ps = con.prepareStatement(sql);
            
            ps.setInt(1, id);
            ps.executeUpdate();
            
            estado = true;
            con.close();
        } catch (Exception e) {
            System.out.println("Error al eliminar: " + e.getMessage());
        }
        return estado;
    }
}