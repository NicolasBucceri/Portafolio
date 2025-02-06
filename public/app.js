document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("botonFormulario");
    const form = document.getElementById("contactForm");

    if (!btn || !form) {
        console.error("No se encontró el formulario o el botón");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        btn.textContent = "Enviando...";

        grecaptcha.ready(function () {
            grecaptcha.execute("6LcYLs8qAAAAABrYjB77T6D-RyMdB0I-nX01EIpQ", { action: "submit" }).then(function (token) {
                // Agregar el token al formulario
                const recaptchaInput = document.createElement("input");
                recaptchaInput.setAttribute("type", "hidden");
                recaptchaInput.setAttribute("name", "g-recaptcha-response");
                recaptchaInput.setAttribute("value", token);
                form.appendChild(recaptchaInput);

                // Enviar el formulario con EmailJS
                const serviceID = "default_service";
                const templateID = "template_5exil2t";

                emailjs.sendForm(serviceID, templateID, form)
                    .then(() => {
                        btn.textContent = "Enviar";
                        alert("Correo enviado con éxito!");
                        form.reset(); // Limpiar el formulario después del envío
                    })
                    .catch((err) => {
                        btn.textContent = "Enviar";
                        alert("Error al enviar: " + JSON.stringify(err));
                    });
            });
        });
    });
});
