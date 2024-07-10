document.getElementById('book-form').addEventListener('submit', addBook);

function addBook(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;

    const bookList = document.getElementById('book-list');

    const bookItem = document.createElement('li');
    bookItem.textContent = `${title} by ${author} (${year})`;

    bookList.appendChild(bookItem);

    // Clear the form
    document.getElementById('book-form').reset();
}
