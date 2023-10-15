const express = require("express");

const router = express.Router();

const Book = require("../models/book");

router.get("/", async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const book = await Book.findById(id);
  res.send(book);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const book = req.body;
  const dbBook = await Book.create(book);
  res.send(dbBook);
});

// update api call

// router.delete("/:id", (req, res) => {
//   const id = req.params.id;
//   const book = books[id - 1];
//   books.splice(id - 1, 1);
//   res.send(book);
// });

module.exports = router;
