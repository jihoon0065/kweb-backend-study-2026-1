const express = require("express");

const app = express();

app.get("/food",(req,res) => {
    res.send("Hello world!");
});

app.listen(8080, () => {
    console.log("Server listening on Port 8080");
});
