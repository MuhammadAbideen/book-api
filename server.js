require("dotenv").config();

const express = require("express");

const app = express();
const PORT = process.env.PORT;

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const logger = (req, res, next) => {
  console.log(`Middleware: Received ${req.method} on ${req.url}`);
  next();
};

const secondLogger = (req, res, next) => {
  console.log(`Second Middleware: Received ${req.method} on ${req.url}`);
  next();
};

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/books", (req, res) => {
  res.send(books);
});

app.get("/api/books/:id", (req, res) => {
  const id = req.params.id;
  res.send(books[id - 1]);
});

app.post("/api/books", (req, res) => {
  console.log(req.body);
  const book = req.body;
  book.id = books.length + 1;
  books.push(book);
  res.send(book);
});

// update api call

app.delete("/api/books/:id", (req, res) => {
  const id = req.params.id;
  const book = books[id - 1];
  books.splice(id - 1, 1);
  res.send(book);
});
