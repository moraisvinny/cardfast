var app = require('./config/custom-express')();

app.listen(3001, function(){
    console.log("Servico de cartoes online ouvindo a porta 3001");
})