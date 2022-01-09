const { response } = require("express");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const Io = require("socket.io")(http);

Io.on("connection", (socket)=>{

    socket.on("disconnect", (data)=>{
        console.log(`User disconnected, ${socket.id}`);
    })

    socket.on("Welcome", (data)=>{
        console.log(data);
    })

    socket.on("word", (data)=>{
        console.log(data)
        socket.on("result",`-${data}-`);
    })

})

app.set("view engine","ejs");

app.get("/", (request, response)=>{
    response.render("index");
})

http.listen(3333, ()=> console.log("Running!"))