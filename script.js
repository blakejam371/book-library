const myLibrary = [];

function createBooks() {
  myLibrary.forEach(function(item) {
    let div = document.createElement('div');
    div.classList.add('books');

    let title = document.createElement('h4');
    title.textContent = item.title;

    let author = document.createElement('p');
    author.textContent = item.author;

    let pages = document.createElement('p');
    pages.textContent = item.pages;

    let read = document.createElement('p');
    read.textContent = item.read;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', function() {
      if(confirm('Are you sure you want to delete?')) {
        deleteBook();
        div.remove();
      } else {
        return;
      }
    });

    let readToggle = document.createElement('button');
    readToggle.textContent = 'Read Status';
    readToggle.classList.add('readToggleButton');
    readToggle.addEventListener('click', () => {
      if (read.textContent === 'read') {
        read.textContent = 'not read';
      } else {
        read.textContent = 'read';
      }
    })

    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    div.appendChild(deleteButton);
    div.appendChild(readToggle);

    document.querySelector('.bookcase').appendChild(div);
  })
};

function deleteBook(index) {
  myLibrary.splice(index, 1);
}

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
const aGameOfThrones = new Book('A Game of Thrones', 'George R. R. Martin', '694 pages', 'read');

myLibrary.push(theHobbit);
myLibrary.push(fellowshipOfTheRing);
myLibrary.push(twoTowers);
myLibrary.push(aGameOfThrones);

createBooks();