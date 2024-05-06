const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read');
const fellowshipOfTheRing = new Book('The Fellowship of the Ring', 'J.R.R Tolkien', '423 pages', 'read');
const twoTowers = new Book('The Two Towers', 'J.R.R Tolkien', '352 pages', 'read');