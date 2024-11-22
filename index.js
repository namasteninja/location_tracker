const express = require("express");
const app = express();

const http = require("http");
const path = require("path");
const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio(server);

// Set up the view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));

// Handle socket.io connection
io.on("connection", (socket) => {
    console.log(`New client connected with id: ${socket.id}`);

    socket.on("send-location", (data) => {
        io.emit("receive-location", { id: socket.id, ...data });
    });

    socket.on("disconnect", () => {
        io.emit("user-disconnected" , socket.id);
        console.log(`Client with id: ${socket.id} disconnected`);
    });
});

// Render the index page
app.get("/", async (req, res) => {
    res.render("index.ejs");
});

// Start the server
server.listen(3000);