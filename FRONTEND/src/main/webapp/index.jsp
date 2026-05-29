<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Registro Mascota</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container mt-5">

    <%
    // Si el Servlet detecta un error (como edad negativa), muestra este aviso rojo
    String error = (String) request.getAttribute("error");
    if (error != null) {
    %>
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>¡Atención!</strong> <%= error %>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    <%
    }
    %>

    <div class="card shadow-sm p-4">
        <h2 class="mb-4">Registrar Nueva Mascota</h2>

        <form action="MascotaServlet" method="post">

            <div class="mb-3">
                <label class="form-label">Nombre de la mascota:</label>
                <input type="text" name="nombre" class="form-control" required>
            </div>

            <div class="mb-3">
                <label class="form-label">Edad (en años):</label>
                <input type="number" name="edad" class="form-control" required>
            </div>

            <div class="mb-3">
                <label class="form-label">Tipo (Perro, Gato, etc.):</label>
                <input type="text" name="tipo" class="form-control" required>
            </div>

            <button type="submit" class="btn btn-success">Guardar Mascota</button>
            
            <a href="MascotaServlet" class="btn btn-outline-primary ms-2">Ver lista</a>
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>