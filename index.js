const express = require('express')
const app = express()
const port = 3000
const data = require('./data.json')



app.get("/customers", (req, res) => {
   res.send(data)
});

app.get("/customer/:userId", (req, res) => {
    for(let i = 0; i < data.length; i++)
        if(data[req.params.userId-1] == data[i] ) {
        res.send(data[req.params.userId-1].Name)
        }
    
    return res.send("Wrond ID")

});


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });



