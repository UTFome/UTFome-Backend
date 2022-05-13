const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes.js');


app.use(express.json());
app.use(cors());
app.use(routes);

const PORT = process.env.PORT ? process.env.PORT : 3333;

const HOST = process.env.HEROKU_APP_NAME ? `https://${process.env.HEROKU_APP_NAME}.herokuapp.com` : "http://localhost"

app.listen(PORT, () => {
    const portStr = PORT === 80 ? '' :  ':' + PORT
    if (process.env.HEROKU_APP_NAME)
        console.log('Servidor iniciado. Abra o navegador em ' + HOST)
    else console.log('Servidor iniciado. Abra o navegador em ' + HOST + portStr)
});