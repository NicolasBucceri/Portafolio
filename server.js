const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware para procesar datos del formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para servir index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

function sendMail() {
  let params = {
    nombre : document.getElementById("nombre").value,
    email : document.getElementById("email").value,
    asunto : document.getElementById("asunto").value,
    mensaje : document.getElementById("mensaje").value,
  }
  emailjs.send("service_wgqca7a","template_5exil2t",params).then(alert("Email Enviado"))
}