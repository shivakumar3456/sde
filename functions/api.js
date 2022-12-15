const express=require("express"); 
const ejs=require("ejs");
const bodyParser=require("body-parser");
const serverless = require("serverless-http");

const app= express();
const router = express.Router();

//setting the view engine as EJS. 
app.set('view engine', 'ejs');
//roots the views directory to public
app.set('views', path.join(__dirname, 'public'));
//tells express that the public folder is the static folder
app.use(express.static(path.join(__dirname, 'public')));


router.get("/webservices", function(req,res){
  res.render("./app/webservices/webservices");
});

router.get("/caching/introcache", function(req,res){
  res.render("./app/caching/introcache/introcache");
});

router.get("/caching", function(req,res){
  res.render("./app/caching/caching");
});

router.get("/scaling", function(req,res){
  res.render("./app/scaling/scaling");
});

router.get("/scaling/messagequeue", function(req,res){
  res.render("./app/scaling/messagequeue/messagequeue");
});

router.get("/scaling/messagequeue/intro", function(req,res){
  res.render("./app/scaling/messagequeue/messagequeueintro");
});

router.get("/", function(req,res){
  res.render("./startpage");
});

router.all("*", function(req, res){
  res.render("./404notfound");
});

// app.listen(process.env.PORT || 8080, function(){
//         console.log("SERVER STARTED ON localhost:8080");     
// }
// )

app.use("/", router);


module.exports = app;
module.exports.handler = serverless(app);