const express = require('express');
const app = express();
const path = require('path');
PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routes/htmlRoutes")(app);

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));