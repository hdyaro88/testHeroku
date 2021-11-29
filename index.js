const express = require("express")
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
const path = require("path");
app.listen(process.env.PORT || 5000 , () => {
    console.log("server is up at port : 5000")
})
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.get("/welcome" , (req , res) => {
    res.header("Content-Type", "application/json");
    console.log("hello")
    res.send({status : "hello , welcome"});
})