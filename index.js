const express=require("express"); 
const ejs=require("ejs");
const bodyParser=require("body-parser");
const app= express();
//setting the view engine as EJS. 
app.set('view engine', 'ejs');
//roots the views directory to public
app.set('views', 'public');
//tells express that the public folder is the static folder
app.use(express.static("public"));


app.get("/webservices", function(req,res){
  res.render("./app/webservices/webservices");
});

app.get("/caching/introcache", function(req,res){
  res.render("./app/caching/introcache/introcache");
});

app.get("/caching", function(req,res){
  res.render("./app/caching/caching");
});

app.get("/scaling", function(req,res){
  res.render("./app/scaling/scaling");
});

app.get("/scaling/messagequeue", function(req,res){
  res.render("./app/scaling/messagequeue/messagequeue");
});

app.get("/scaling/messagequeue/intro", function(req,res){
  res.render("./app/scaling/messagequeue/messagequeueintro");
});

app.get("/", function(req,res){
  res.render("./startpage");
});

app.get(".*", function(req, res){
  res.render("./404notfound");
});

app.listen(3000, function(){
        console.log("SERVER STARTED ON localhost:3000");     
})