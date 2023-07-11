const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');

let items = [];

app.get("/",function(req,res){
    
    let today = new Date();

    let options = {
        day : 'numeric',
        month : 'long',
        year : 'numeric',
        weekday : 'long'
    }
    let day = today.toLocaleDateString("en-US",options);
    res.render("list",{kindOfDay : day,newListItem:items});
});

app.post("/",function(req,res){
    let item = req.body.newItem;
    
    items.push(item);
    res.redirect('/');
});

app.listen(process.env.PORT || 3000,function(){
    console.log("Server Started at port 3000");
});
