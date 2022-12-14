/* eslint-disable no-unused-vars */

const form = document.querySelector('form');
const bookInfo = document.querySelector('.all-books');
const title = document.querySelector('#input-title');
const author = document.querySelector('#input-author');

let bookArr = [];

function bookDisplay() {
  bookInfo.innerHTML = '';
  for (let i = 0; i < bookArr.length; i += 1) {
    const oneBook = document.createElement('div');
    oneBook.className = 'book';
    oneBook.innerHTML = `
      <p class="title">"${bookArr[i].title}" by ${bookArr[i].author}</p>
      <button class="remove" onclick="removeBook(${i})">Remove</button>
    `;
    bookInfo.appendChild(oneBook);
    title.value = '';
    author.value = '';
  }
}

function addBook() {
  const eachBook = {};
  eachBook.id = bookArr.length;
  eachBook.title = title.value;
  eachBook.author = author.value;

  bookArr.push(eachBook);
  bookDisplay();

  const jsonData = JSON.stringify(bookArr);
  localStorage.setItem('form', jsonData);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBook();
});

window.addEventListener('load', () => {
  const getJsonData = localStorage.getItem('form');
  if (getJsonData) {
    bookArr = JSON.parse(getJsonData);
  }
  bookDisplay();
});

function removeBook(index) {
  bookArr.splice(index, 1);
  bookDisplay();
  const jsonData = JSON.stringify(bookArr);
  localStorage.setItem('form', jsonData);
}
