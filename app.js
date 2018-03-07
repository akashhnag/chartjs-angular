var express=require('express');
var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended: false});
var mongoose=require("mongoose");
var app=express();
var ejs=require("ejs");
app.set("view engine","ejs");

//database setup
mongoose.connect("mongodb://population:population@ds255958.mlab.com:55958/charts");
var schema=new mongoose.Schema(
  {
    Continent: {type:String},
    Value: {type:String},
    Year:{type:String}
},
);

var data=mongoose.model("population",schema);

app.use(bodyParser.json());
app.use('/',express.static(__dirname+'/public'));

app.get("/",function(req,res){
  res.render("angular");
});

app.get("/admin",function(req,res){
  res.render("admin");
});

app.get("/data",function(req,res){
  data.find({Year:"2011"},function(err,data){
    if (err) throw err;
    res.send(data);
  })
})

app.get("/line",function(req,res){
  data.find({},function(err,data){
    if (err) throw err;
    res.send(data);
  })
})

app.post("/data/cg",function(req,res){
  data.find({Year:req.body.year},function(err,data){
    if (err) throw err;
    res.send(data);
  })
})

app.post("/data",function(req,res){
  var new_data=data(req.body).save(function(err){
    if (err) throw err;
    res.send("save successful");
  })
})

app.get("/no-angular",function(req,res){
  res.render("no-angular");
});

app.listen(3000,function(){
  console.log("listening to port 3000");
});
