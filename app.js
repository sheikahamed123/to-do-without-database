

// Create a new file called server.js
const express = require('express');
const bodyParser = require('body-parser');
const date =require(__dirname+ "/date.js");
let workitems=[];
var items=[];

// Create a new Express app
const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Create a new route for the /hello endpoint
app.get("/", (req, res) => {

let day=date();

    res.render("list",{ListTitle:day,newListitems:items});
  
});
app.post("/",function(req,res){
    
    var todoitem=req.body.todoitem;

    if(req.body.button === "Work"){
        workitems.push(todoitem);
        res.redirect("/work")
    }
    else{
    items.push(todoitem);
    res.redirect("/");
    }
    
   
})

app.get("/work", function(req,res){
    res.render("list",{ListTitle:"Work List" , newListitems:workitems});
});

app.post("/work", function(req,res){
    let item=req.body.todoitem;
    workitems.push(item);
    res.redirect("/work");
})

// Start the server on port 3000
app.listen(3000, function() {

console.log('Server started on port 3000')});

