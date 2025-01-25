const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

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

// Ruta para enviar correos
// Ruta para enviar correos
app.post('/send-email', async (req, res) => {
  const { from_name, email_id, asunto, message } = req.body;

  if (!from_name || !email_id || !asunto || !message) {
    return res.status(400).send('Todos los campos son obligatorios.');
  }

  // Configuración del transporte de nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, // TLS
    auth: {
      user: process.env.EMAIL_USER, // Tu email
      pass: process.env.EMAIL_PASS, // Contraseña de aplicación
    },
  });

  // Configurar el contenido del correo
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'nicolasbucceri.dev@hotmail.com', // Cambiar al destinatario real
    subject: asunto,
    html: `
      <h3>Nuevo mensaje de contacto</h3>
      <p><strong>Nombre:</strong> ${from_name}</p>
      <p><strong>Email:</strong> ${email_id}</p>
      <p><strong>Asunto:</strong> ${asunto}</p>
      <p><strong>Mensaje:</strong> ${message}</p>
    `,
  };

  // Intentar enviar el correo
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Correo enviado con éxito.');
  } catch (error) {
    console.error('Error al enviar el correo:', error); // Imprime el error en consola
    res.status(500).send('Error al enviar el correo.'); // Responde con un error 500 si falla
  }
});

