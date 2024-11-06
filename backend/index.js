const express = require('express')
const app = express()
const port = 5000
const mongoDB= require("./db")
const mongoose = require('mongoose');
const cors = require("cors")

mongoose.set('strictQuery', true);


app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Orign","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type,Accept"
  );
  next();
})



mongoDB();
app.get('/', (req, res) => {
  res.send('Hello kallu World!')
})
app.use(cors())
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})