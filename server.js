// Creacion de constantes para dependencias
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

// Obtener las Rutas para nuestro API
const api = require('./server/routes/api');

// Creacion de la constante de nuestra App
const app = express();

// Parser para obtener la informacion durante peticiones POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false}));

// Directorio donde se encontrara la aplicacion Angular
app.use(express.static(path.join(__dirname, 'dist')));

// Definicion de url para nuestra API
app.use('/api', api);

// Captura de todas las demas llamadas a otras url que no sean /api
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Definicion del PUERTO donde se ejecutara nuestra Aplicacion
const port = process.env.PORT || '3000';

app.set('port', port);

// Creacion del server HTTP
const server = http.createServer(app);

// Ponemos a escuchar el puerto para correr nuestra app
server.listen(port, () => {
  console.log(`MEAN APP Running in localhost:${port}`);
});