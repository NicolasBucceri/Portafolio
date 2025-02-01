document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  // Usamos emailjs.sendForm para enviar el formulario directamente a EmailJS
  emailjs.sendForm('service_wgqca7a', 'template_5exil2t', this)
      .then(function(response) {
          console.log('Correo enviado con éxito:', response);
          alert('¡Mensaje enviado correctamente!');
      }, function(error) {
          console.log('Error al enviar el correo:', error);
          alert('Hubo un problema al enviar el mensaje.');
      });
});
