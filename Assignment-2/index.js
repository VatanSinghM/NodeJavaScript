
const fs =  require("fs");
const http = require("http");
const content = `<h1>Hello world</h1>`;


fs.writeFile("index1.html",content,(err)=>{
    console.log(err);
    http.createServer((req,res)=>{
        fs.readFile("index1.html",(err, data) =>{
            res.end(data);

        })
        
    }).listen(3000, () => {console.log("server")});
})

