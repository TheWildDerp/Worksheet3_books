const express = require("express");

const books = require("./bookdata/books");

const server = express();

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

server.get('/', (req,res) => {
    res.send("API is running");
});

server.get('/books', (req,res) => {
    res.json(books);
});

server.get('/books/:id', (req,res) => {
    const book = books.find((n) => n._id === req.params.id);
    res.send(book);
    console.log(req.params);
});

server.listen(PORT), console.log(`server is working and listening PORT ${PORT}`);