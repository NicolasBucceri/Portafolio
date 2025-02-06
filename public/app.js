document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById('botonFormulario');
    const form = document.getElementById('contactForm');

    if (!btn || !form) {
        console.error("No se encontró el formulario o el botón");
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        btn.textContent = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_5exil2t';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.textContent = 'Enviar';
                alert('Correo enviado con éxito!');
                form.reset();
            })
            .catch((err) => {
                btn.textContent = 'Enviar';
                alert('Error al enviar: ' + JSON.stringify(err));
            });
    });
});
