document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
  
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
  
    try {
        const response = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
     
        const result = await response.text();
        if (response.ok) {
          alert(result);
        } else {
          alert('Error: ' + result);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error al enviar el correo');
      }     
  });
  