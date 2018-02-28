import express from "express";
import bodyParser from "body-parser";

const cors = require("cors");

// what is the point of this variable 
let clientId = 1;
// what is the point of this array
const messages = [
  {
    clientId: 0,
    text: "Welcome To Chat"
  }
];

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/clientId",function (request,response) {
  clientId++;
  response.send(clientId.toString());
});
app.get("/messages",function (request,response) {
  response.json(messages);
});
app.post("/messages",function (request,response) {
  messages.push(request.body);
  response.json(messages);
});



const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
