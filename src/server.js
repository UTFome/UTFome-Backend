const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes.js');


app.use(express.json());
app.use(cors());
app.use(routes);

const PORT = process.env.PORT ? process.env.PORT : 3333;

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});