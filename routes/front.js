var db = require('../config/database');
module.exports = function (app){
var connection = db();

app.get('/frontend', function(req,res){
    var connection = app.app.config.database();
    
    var query = connection.query("SELECT * FROM modafeminina.produto",
        function(error,results,fields){
        console.log(error,results)
        res.render('views/frontend',{dados:results});
    });

    query.on('error',function(error){
        console.log("[mysql error:]",error);
    });

});

}