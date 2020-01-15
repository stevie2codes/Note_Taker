const express = require('express');
const app = express();
const path = require('path');
PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req, res){
    res.send("Hello Home page");
});

 

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
