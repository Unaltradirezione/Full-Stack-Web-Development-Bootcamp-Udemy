// import express from "express";
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About Me</h1><p>My name is Angela</p>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });










//--------------------------------------------------------------------
//prueba con server express
// import express from "express";
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("<h1>Bienvenido al servidor de prueba express</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>Acerca de mí</h1><p>Mi nombre es Victor</p>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contacto</h1><p>Phone: +52 557 787 3824</p>");
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });

// prueba con server express, mostrando todos los h1, por ser rutas separadas 
//no mostrba todas
import express from "express";
const app = express();
const port = 3000;

// Página principal con enlaces a las otras rutas
app.get("/", (req, res) => {
  res.send(`
    <h1>Bienvenido al servidor de prueba Express</h1>
    <ul>
      <li><a href="/about">Acerca de mí</a></li>
      <li><a href="/contact">Contacto</a></li>
    </ul>
  `);
});

// Ruta /about
app.get("/about", (req, res) => {
  res.send(`
    <h1>Acerca de mí</h1>
    <p>Mi nombre es Victor y estoy probando Express.</p>
    <a href="/">Volver al inicio</a>
  `);
});

// Ruta /contact
app.get("/contact", (req, res) => {
  res.send(`
    <h1>Contacto</h1>
    <p>Teléfono: +52 557 787 3824</p>
    <a href="/">Volver al inicio</a>
  `);
});

// Servidor escuchando
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
