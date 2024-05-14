const myLibrary = [];

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read');
const fellowshipOfTheRing = new Book('The Fellowship of the Ring', 'J.R.R Tolkien', '423', 'read');
const twoTowers = new Book('The Two Towers', 'J.R.R Tolkien', '352', 'read');
const aGameOfThrones = new Book('A Game of Thrones', 'George R. R. Martin', '694', 'read');

myLibrary.push(theHobbit);
myLibrary.push(fellowshipOfTheRing);
myLibrary.push(twoTowers);
myLibrary.push(aGameOfThrones);

createBooks();

let dialog = document.querySelector('dialog');
let addNewBookButton = document.querySelector('.addNewBook');
addNewBookButton.addEventListener('click', () => {
  dialog.showModal();
  let closeButton = document.querySelector('.closeButton');
  closeButton.addEventListener('click', () => {
    dialog.close();
  })
  let addToLibrary = document.querySelector('#addToLibrary');
  addToLibrary.addEventListener('click', function(event) {
    event.preventDefault();
    addBookToLibrary();
  });
});

function createBooks() {
  document.querySelector('.bookcase').innerHTML = ''

  myLibrary.forEach(function(item) {
    let div = document.createElement('div');
    div.classList.add('books');

    let title = document.createElement('h4');
    title.textContent = item.title;

    let author = document.createElement('p');
    author.textContent = item.author;

    let pages = document.createElement('p');
    pages.textContent = `${item.pages} pages`;

    let read = document.createElement('p');
    read.textContent = item.read;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', function() {
      if(confirm('Are you sure you want to delete?')) {
        const index = myLibrary.indexOf(item);
        deleteBook(index);
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
        item.read = 'not read';
      } else {
        read.textContent = 'read';
        item.read = 'read';
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
  if (index >= 0 && index < myLibrary.length) {
    myLibrary.splice(index, 1);
    createBooks();
  }
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector('#bookName').value;
  let author = document.querySelector('#authorName').value;
  let pages = document.querySelector('#pageNumber').value;
  let read = '';
  const checkedRadioButton = document.querySelector('input[name="readToggle"]:checked');
  if (checkedRadioButton) {
    read = checkedRadioButton.value;
    checkedRadioButton.checked = false;
  }

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  createBooks();

  document.querySelector('#bookName').value = '';
  document.querySelector('#authorName').value = '';
  document.querySelector('#pageNumber').value = '';

  dialog.close();
}