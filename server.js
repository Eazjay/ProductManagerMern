const express = require("express");
const app = new express();
const port = 8000;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


require('./server/config/product.config');
require('./server/routes/product.routes')(app);
app.listen(port, ()=> console.log(`Listening on port ${port}`));