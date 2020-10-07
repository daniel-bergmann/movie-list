'use strict';

// Transpiled JS code using Babel

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Book = function Book(title, director, year) {
    _classCallCheck(this, Book);

    this.title = title;
    this.director = director;
    this.year = year;
};

var UI = function () {
    function UI() {
        _classCallCheck(this, UI);
    }

    _createClass(UI, [{
        key: 'addBookToList',
        value: function addBookToList(book) {
            // creating list variable
            var list = document.getElementById('book-list');
            // When adding the book it creates a tr element in the DOM
            var row = document.createElement('tr');
            // adding columns - using template literals
            row.innerHTML = '\n        <td>' + book.title + '</td>\n        <td>' + book.director + '</td>\n        <td>' + book.year + '</td>\n        <td><a href="#" class="delete">X<a></td>\n    ';

            list.appendChild(row);
        }
    }, {
        key: 'showAlert',
        value: function showAlert(message, className) {
            // create DIV
            var div = document.createElement('div');
            // Add classes
            div.className = 'alert ' + className;
            // Add text
            div.appendChild(document.createTextNode(message));
            // Get parent
            var container = document.querySelector('.container');
            // Get form
            var form = document.querySelector('#book-form');
            // Insert Alert
            container.insertBefore(div, form);

            // timeout after 3 sec
            setTimeout(function () {
                document.querySelector('.alert').remove();
            }, 3000);
        }
    }, {
        key: 'deleteBook',
        value: function deleteBook(target) {
            if (target.className === 'delete') {
                target.parentElement.parentElement.remove();
            }
        }
    }, {
        key: 'clearFields',
        value: function clearFields() {
            document.getElementById('title').value = '';
            document.getElementById('director').value = '';
            document.getElementById('year').value = '';
        }
    }]);

    return UI;
}();

// Event Listener for the book to be added


document.getElementById('book-form').addEventListener('submit', function (e) {
    // click button for form values
    var title = document.getElementById('title').value,
        director = document.getElementById('director').value,
        year = document.getElementById('year').value;

    // Creating a book object
    var book = new Book(title, director, year);

    // Creating UI
    var ui = new UI();

    // Validate
    if (title === '' || director === '' || year === '') {
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
document.getElementById('book-list').addEventListener('click', function (e) {

    // Creating UI
    var ui = new UI();

    // for deletion of the book
    ui.deleteBook(e.target);

    // show message
    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();
});