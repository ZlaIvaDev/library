/*
book constructor examle
*/



let hyperion = new Book('Hyperion', 512, 'yes', 'J. Simmons');
let LoTR = new Book('Lord of the rings', 700, 'no', 'J.R.R. Tolkien' );

/*

All of your book objects are going to be stored
in an array, so you’ll need a constructor for books.
Then, add a separate function to the script
(not inside the constructor)
that can take some arguments,
create a book from those arguments,
and store the new book object into an array.
Also, all of your book objects should have a unique id,
which can be generated using crypto.randomUUID().
This ensures each book has a unique and stable identifier,
preventing issues when books are removed or rearranged.
Your code should look something like this
(we’re showing only a basic skeleton without function parameters):

*/

const myLibrary = [];

function Book(title, pages, status, author) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.status = status;

    this.info = function() {
        return `${this.title} by ${this.author}, is ${this.pages} pages long. Read status: ${this.status}`
    }

}

function addBookToLibrary() {
    
}