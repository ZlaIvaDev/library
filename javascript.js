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
/* inputs */

const addTitle = document.querySelector('.title');
const addAuthor = document.querySelector('.author');
const addPages = document.querySelector('.pages');
const addReadStatus = document.querySelector('.read');

const mainContainer = document.querySelector('.books-grid');
const finishedBtnTxt = document.querySelector('.reading-status');




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

/* buttons event listeners */
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', function() {
    addAuthor.value = '';
    addTitle.value = '';
    addReadStatus.value = '';
    addPages.value = '';
});

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', function() {
    const newCard = document.createElement('div');
    newCard.classList.add('cards')
    mainContainer.appendChild(newCard);

    const newTitle = document.createElement('h3');
    newTitle.classList.add('book-title');
    newTitle.textContent = addTitle.value;
    newCard.appendChild(newTitle);

    const newAuthor = document.createElement('h4');
    newAuthor.classList.add('book-author');
    newAuthor.textContent = addAuthor.value;
    newCard.appendChild(newAuthor);

    const newPages = document.createElement('p');
    newPages.classList.add('book-pages');
    newPages.textContent = addPages.value + ' pages';
    newCard.appendChild(newPages);

    newCard.appendChild(finishedBtnTxt);

    const btn3 = document.createElement('div')
    btn3.classList.add('button r')
    btn3.setAttribute("id", "button-3");
    newCard.appendChild(button3);
    /* a lot of work lol */
    const btnInput = document.createElement('input');
    btnInput.setAttribute('type', 'checkbox');
    btnInput.classList.add('checkbox');
    const knobs = document.createElement('div');
    knobs.classList.add('knobs');
    const layer = document.createElement('div');
    layer.classList.add('layer');

    newCard.appendChild(btn3);
    btn3.appendChild(btnInput);
    btn3.appendChild(knobs);
    btn3.appendChild(layer);

});
/*
<div id="button-3" class="button r">
                        
    <input class="checkbox" type="checkbox">
    <div class="knobs"></div>
    <div class="layer"></div>
</div>
*/


/* 
add dugme treba da :
1. uzme title, author, pages, status (4 parametra!)
2.appenduje novi <div class="cards"> na main
3. appenduje na <div class="cards"> :
-> h3 klase='book-title" sa title parametrom
-> h4 klase="book-author" sa author parametrom
-> p klase="book-pages" sa pages parametrom
-> h5 klase="reading-status"
->DUGME ! koje u zavisnosti od status parametra
je postavljeno na 'YES' ili 'NO' (hard part)
---> i nakon sto sve to uradi, treba da ocisti inpute !

<div class="cards">
    <h3 class="book-title">The Count of Monte Cristo</h3>
        <h4 class="book-author">Alexander Dumas</h4>
        <p class="book-pages">1276 pages</p>
        <h5 class="reading-status">finished reading</h5>
        <!-- From Uiverse.io by JaydipPrajapati1910 --> 
        <div class="toggle-button-cover">
                    
            <div id="button-3" class="button r">
                        
                <input class="checkbox" type="checkbox">
                <div class="knobs"></div>
                <div class="layer"></div>
            </div>
                    
        </div>
</div>

clear dugme ima jedan zadatak, a to je da
ocisti sve inpute!
*/