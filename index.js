const express = require("express")
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
const path = require("path");
app.listen(process.env.PORT || 5000 , () => {
    console.log("server is up at port : 5000")
})
app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});
app.get("/api" , (req , res) => {
    console.log("hello")
    res.send({status : "hello , welcome"});
})