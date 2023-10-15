const express = require("express");

const router = express.Router();

const books = [
  {
    id: 1,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    year: 1998,
    pages: 251,
    publisher: "Bloomsbury",
    language: "English",
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Some other author",
    year: 1999,
    pages: 317,
    publisher: "Bloomsbury",
    language: "English",
  },
];

router.get("/", (req, res) => {
  console.log("This is coming from Book.js");
  res.send(books);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(books[id - 1]);
});

router.post("/", (req, res) => {
  console.log(req.body);
  const book = req.body;
  book.id = books.length + 1;
  books.push(book);
  res.send(book);
});

// update api call

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const book = books[id - 1];
  books.splice(id - 1, 1);
  res.send(book);
});

module.exports = router;
