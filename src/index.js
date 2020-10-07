// ES6 code
// transpiled code can be found in the dist folder

class Book {
    constructor(title, director, year) {
        this.title = title;
        this.director = director;
        this.year = year; 
    }
}

class UI {
    addBookToList(book) {
        // creating list variable
    const list = document.getElementById('book-list');
    // When adding the book it creates a tr element in the DOM
    const row = document.createElement('tr');
    // adding columns - using template literals
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.director}</td>
        <td>${book.year}</td>
        <td><a href="#" class="delete">X<a></td>
    `;

    list.appendChild(row);
    }

    showAlert(message, className) {
        // create DIV
        const div = document.createElement('div');
        // Add classes
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.container');
        // Get form
        const form = document.querySelector('#book-form');
        // Insert Alert
        container.insertBefore(div, form);

        // timeout after 3 sec
        setTimeout(function(){
        document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('director').value = '';
        document.getElementById('year').value = '';
    }
}

// Event Listener for the book to be added
document.getElementById('book-form').addEventListener('submit', function(e){
    // click button for form values
    const title = document.getElementById('title').value,
    director = document.getElementById('director').value,
        year = document.getElementById('year').value


    // Creating a book object
    const book = new Book(title, director, year);

    // Creating UI
    const ui = new UI();

    // Validate
    if(title === '' || director === '' || year === '') {
        // error alert
        ui.showAlert('Fill in all the fields please', 'error');
    } else {
        // Add book to list and passing in the book object
        ui.addBookToList(book);

        // Show success
        ui.showAlert('Movie Added!', 'success');

        // Clear fields after clicking submit
        ui.clearFields();
    }


    e.preventDefault();
});

// Event Listener for deleting the book
document.getElementById('book-list').addEventListener('click', function(e){

    // Creating UI
    const ui = new UI();

    // for deletion of the book
    ui.deleteBook(e.target);

    // show message
    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();
}); 