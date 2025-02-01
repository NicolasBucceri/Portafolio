// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();  // Carga las variables de entorno

const app = express();
const port = process.env.PORT || 3000;

// Middleware para procesar datos del formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (index.html y app.js)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para servir el formulario (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para enviar el correo
app.post('/send-email', async (req, res) => {
  const { from_name, email_id, asunto, message } = req.body;

  if (!from_name || !email_id || !asunto || !message) {
    return res.status(400).send('Todos los campos son obligatorios.');
  }

  // Configuración de nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, // Usar TLS
    auth: {
      user: process.env.EMAIL_USER, // Tu correo
      pass: process.env.EMAIL_PASS, // La contraseña de la aplicación
    },
  });

  // Opciones del correo
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'nicolasbucceri.dev@hotmail.com', // Dirección del destinatario
    subject: asunto,
    html: `
      <h3>Nuevo mensaje de contacto</h3>
      <p><strong>Nombre:</strong> ${from_name}</p>
      <p><strong>Email:</strong> ${email_id}</p>
      <p><strong>Asunto:</strong> ${asunto}</p>
      <p><strong>Mensaje:</strong> ${message}</p>
    `,
  };

  try {
    // Enviar el correo
    await transporter.sendMail(mailOptions);
    res.status(200).send('Correo enviado con éxito.');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).send('Error al enviar el correo.');
  }
});

// Arrancar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
