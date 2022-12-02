import  express  from 'express';

const app = express();
const path = require("path")

app.get("/", (req, res) => {
  //res.send("Hola");
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, () =>{
  console.log("Server running on port", 3000);
});