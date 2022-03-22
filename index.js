const express = require('express')
const req = require('express/lib/request')
const app = express()
const port = 5006
 
app.use(express.json())
 
 
let data = [
     {
  "Id": 1 ,
  "Title": "scanning",
  "isDone": true
 },
 
 
 {
  "Id": 2 ,
  "Title": "reading",
  "isDone": false
 },
 
 
 {
  "Id": 3 ,
  "Title": "running ",
  "isDone": true
 },
 
 
 {
  "Id": 4 ,
  "Title": "playing",
  "isDone": true
 }
 
]
 
 
app.get("/notes/:id", (req, res) => {
  return res.status(200).send(data[req.params.id-1])
  
});
 
app.post("/notes/:id", (req, res) => {
   data[req.params.id-1]=req.body;
   return res.send(data);
});  
 
app.delete("/note/:id", (req,res) => {
   data[req.params.id-1] = undefined;
   return res.send(data);
     
});
 
 
 
 
app.listen(port, () => {
   console.log(`app listening at http://localhost:${port}`)
 });
 