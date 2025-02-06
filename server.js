app.post("/verify-recaptcha", async (req, res) => {
  const { token } = req.body; // Obtener el token del frontend
  const secretKey = "6LcYLs8qAAAAACsH5Jy9pNy0XTs3_m-Y7yUavinX"; // Reemplázalo con tu clave secreta

  try {
      const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
          method: "POST",
          headers: {
              "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
              secret: secretKey,
              response: token,
          }),
      });

      const data = await response.json();

      if (data.success) {
          res.json({ success: true, message: "Verificación exitosa" });
      } else {
          res.status(400).json({ success: false, message: "Verificación fallida" });
      }
  } catch (error) {
      res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});
