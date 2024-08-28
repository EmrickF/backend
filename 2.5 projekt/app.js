const express = require('express')
const app = express()
const fs = require("fs")
const { parse } = require('path')

app.use(express.static("2.5"))
app.use(express.urlencoded())

app.post("/signup", (req, res)=>{
  console.log(req.body)
  fs.writeFileSync("info.json", JSON.stringify(req.body))
  res.sendFile(__dirname+'/2.5/index.html')
})
// app.post("/login", (req, res)=>{
//   const file = JSON.parse(fs.readFileSync("info.json",{encoding:'utf-8'}))
//   res.sendFile(__dirname+'/2.5/index.html')

  app.post("/login", (req, res)=>{
    console.log(req.body.password,'från login')
  console.log(req.body.username,'från login')
    const file = JSON.parse(fs.readFileSync("info.json",{encoding:'utf-8'}))
    console.log(file.password,"från fil")
  console.log(file.username,"från fil")

  if (req.body.username == file.username) {
    if (req.body.password == file.password) {
    res.sendFile(__dirname+'/2.5/home.html')
  }
  else{
    res.send("invalid password or name")
  }
}
  else{
    res.send("invalid password or username")
  }
}
)


app.listen(3000, ()=>{
    console.log("Server up and running")
})
app.get("/read",(req, res)=>{
  const file = JSON.stringify(fs.readFileSync("info.json",{encoding:'utf-8'}))
res.send(file)
})
