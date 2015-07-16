var express=require('express');
var app=express();


app.use(express.static('content'));
app.use(express.static('routes'));
app.use(express.static('views'));
app.use(express.static('node_modules/bootstrap/dist/css'));
app.use(express.static('node_modules/bootstrap/dist/js'));
app.use(express.static('controllers'));
app.get('/',function(req,res){
	res.sendFile(__dirname+'/views/layout/index.html');	
});

var server=app.listen(3000,function(){
	console.log("Server started...");
});
