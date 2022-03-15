const express = require("express")
const faker = require("faker")
var bodyParser = require("body-parser")
const req = require("express/lib/request")
const app = express()

app.use(express.static("public"))

app.use(bodyParser.urlencoded({extended:false}))

app.set('views','./form')
app.set('view engine','ejs')


var users = [];

for(let i = 0;i<10;i++){
    users.push({
      name : faker.name.findname(),
      email: faker.internet.email(),
      image: faker.image.image()
    })
}
app.get("/",(req,res)=>{

    res.render("index.ejs",{users});

})


app.get("/form",(req,res)=>{

    res.render("form.ejs",{users});

})

app.post("/app/user",(req,res)=>{
    console.log("adding user");
    console.log(req.body);
    users.push({
        name:req.body.name,
        email:req.body.email,
        image:faker.image.image()
    })
    res.redirect("/");

})

app.listen(3000,()=>{
    console.log("server is listening")
})
