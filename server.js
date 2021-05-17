const express = require("express");
const cors = require("cors");
const app = new express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


require('./server/config/product.config');
require('./server/routes/product.routes')(app);
app.listen(port, ()=> console.log(`Listening on port ${port}`));