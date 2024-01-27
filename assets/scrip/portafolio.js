function enviarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    alert('Mensaje enviado:\nNombre: ' + nombre + '\nCorreo Electrónico: ' + email + '\nMensaje: ' + mensaje);
    
    document.getElementById('contactForm').reset();
  }