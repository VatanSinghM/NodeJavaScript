 const express = require("express");
 var bodyParser = require('body-parser');
 const user = require("./model/user");
 const mongoose = require('mongoose');
 var methodOverride = require('method-override')
 mongoose.connect('mongodb://localhost:27017/assignment_4',(req,res)=>{
     res.send("mongo db accesed");
 });
 
 const app = express();
 
 app.use(methodOverride('_method'))
 
 app.use(bodyParser());
 app.use(express.static("public"));
 
 app.set('views', './views');
 app.set('view engine', 'ejs');
    
 app.get("/", async (req, res) =>{
     
     const users = await user.find();
     res.render("index.ejs", {users});
 })
 
 app.get("/views/form", (req, res) =>{
     res.render("form.ejs");
 })
 
 app.post("/user/add", async (req, res) =>{
     
     console.log(req.body);
     const {name, email, age, city, profession} = req.body;
     await user.create({
         name,
         email,
         age,
         city, 
         profession
     })
     res.redirect("/");
 })

 app.put("/user/:city", async (req, res) =>{
     
     console.log(req.params.city);
     await user.updateOne({city: req.params.city}, {selected: true});
     res.redirect("/");
 })
 
 app.delete("/user/:city", async (req, res) =>{
     
     await user.deleteOne({_id: req.params.id}, {selected: true});
     res.redirect("/");
 })
 
 app.listen(3000, ()=> console.log("Server is running"));
