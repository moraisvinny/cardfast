var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var consign = require('consign');


module.exports = function() {

    var app = express();

    app.use(bodyParser.json());
    app.use(expressValidator());

    consign().include('controllers').into(app);

    return app;
}