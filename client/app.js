const express = require('express');
const port=process.env.PORT || 5000; 
const app = express();
app.use(express.urlencoded())
app.get('/form',(req,res)=>{
  res.sendFile(__dirname + '/index.html');
})

app.post('/formpost',(req,res)=>{
  console.log(req.body)
res.send('sendddd')
})

app.listen(port,()=>{
  console.log(`server started at https://localhost:${port}`)
});

