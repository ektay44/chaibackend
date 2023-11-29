require('dotenv').config()
const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/linkedin", (req, res) => {
  res.send("ekta-yadav");
});

app.get("/login", (req, res) => {
  res.send("<h3>please login at ekta aur code</h3>");
});

app.get('/youtube', (req, res)=>{
    res.send("<h2>Express JS</h2>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
