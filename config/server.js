var express = require('express');

var app = express();
app.set('view engine','ejs');
app.set('views','./views')


consign()
.include('./routes')
.then('config/database.js')
.then('./models')
.into(app);

module.exports = app;
