const express = require('express');
const app = express();
app.set('view engine','ejs');


app.get("/", function(req,res){
    res.render('secao/index')

});

app.get('/index', function(req,res){
    res.render('secao/index');
});
app.get('/roupas', function(req,res){
    const mysql = require("mysql");
    const connection = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password:'',
        database:'modafeminina',
    });

    connection.query ("select * from produto",(error,result) =>{
        res.render('secao/roupas',{produto:result})
    });
   
});
app.get('/endereco', function(req,res){
    res.render('secao/endereco');
});
app.get('/faleconosco', function(req,res){
    res.render('secao/faleconosco');
});
   
app.listen(3001,function(){
    console.log("Servidor Ativo!");
});


