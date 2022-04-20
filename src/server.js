const express = require('express');
const app = express();

const produtoRoutes = require('./routes/produtos.routes');




app.use(express.json());
app.use(produtoRoutes);

app.listen(3333, () => {
    console.log("Server started on port 3333");
});