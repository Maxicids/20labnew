const express = require('express');
const expressHandlebars = require("express-handlebars");
const bodyParser = require('body-parser');

const cellPhonesRoute = require('./routes/cellphones');

const app = express();

app.engine('handlebars', expressHandlebars.engine());
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use('/', cellPhonesRoute);

app.listen(process.env.PORT, () =>
{
    console.log("localhost:");
});
