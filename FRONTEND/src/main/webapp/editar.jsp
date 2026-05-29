<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="com.mycompany.petsbook_web.modelo.mascota" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Editar Mascota - PetsBook</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container mt-5">

    <div class="card shadow-sm p-4">
        <h2 class="mb-4">Modificar Datos de la Mascota</h2>

        <%
            // Recibimos la mascota que el Servlet buscó por ID
            mascota m = (mascota) request.getAttribute("mascota");

            if (m != null) {
        %>

        <form action="MascotaServlet" method="post">

            <input type="hidden" name="id" value="<%= m.getId() %>">

            <div class="mb-3">
                <label class="form-label">Nombre:</label>
                <input type="text" name="nombre" class="form-control" value="<%= m.getNombre() %>" required>
            </div>

            <div class="mb-3">
                <label class="form-label">Edad:</label>
                <input type="number" name="edad" class="form-control" value="<%= m.getEdad() %>" required>
            </div>

            <div class="mb-3">
                <label class="form-label">Tipo (Especie):</label>
                <input type="text" name="tipo" class="form-control" value="<%= m.getTipo() %>" required>
            </div>

            <button type="submit" class="btn btn-warning">Actualizar Cambios</button>
            <a href="MascotaServlet" class="btn btn-secondary ms-2">Cancelar</a>
        </form>

        <%
            } else {
        %>
            <div class="alert alert-warning">
                No se encontraron datos para editar. Por favor, regrese a la lista.
            </div>
            <a href="MascotaServlet" class="btn btn-primary">Volver al Listado</a>
        <%
            }
        %>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>