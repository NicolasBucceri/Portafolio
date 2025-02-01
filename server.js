const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos (index.html, app.js)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para servir el formulario (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Arrancar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
