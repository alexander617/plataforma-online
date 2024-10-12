// JavaScript para manejar el formulario
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los valores ingresados
    const nombre = document.getElementById('nombre').value;
    const codigoPais = document.getElementById('codigoPais').value;
    const telefono = document.getElementById('telefono').value;
    const plataforma = document.getElementById('plataforma').value;

    // Validar que los campos estén completos
    if (nombre && codigoPais && telefono && plataforma) {
        // Mostrar el mensaje de confirmación con los datos
        const mensaje = `Nombre: ${nombre}<br>Teléfono: ${codigoPais} ${telefono}<br>Plataforma: ${plataforma}`;
        document.getElementById('messageContent').innerHTML = mensaje;
        document.getElementById('messageContainer').style.display = 'block';
    }
});

