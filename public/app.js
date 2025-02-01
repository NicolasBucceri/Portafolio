// Inicializar EmailJS con tu public key
emailjs.init('upc6A1YO3r0aOjNN9'); // Usa tu propia clave pública

// Obtener el formulario y agregar el evento de envío
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita el comportamiento por defecto del formulario

  // Usar emailjs.sendForm para enviar el formulario
  emailjs.sendForm('service_wgqca7a', 'template_5exil2t', this)
    .then(function(response) {
      // Si el correo se envió correctamente
      console.log('Correo enviado con éxito:', response);
      alert('¡Mensaje enviado correctamente!');
    }, function(error) {
      // Si hubo un error al enviar el correo
      console.log('Error al enviar el correo:', error);
      alert('Hubo un problema al enviar el mensaje.');
    });
});
