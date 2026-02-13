
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

}

function addBookToLibrary() {
    let new_book = addTitle.value;
    new_book = new Book(addTitle.value, addPages.value, addReadStatus.value, addAuthor.value);
    myLibrary.push(new_book);

    
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

    newCard.innerHTML = `
    <h3 class="book-title">${addTitle.value}</h3
    <h4 class="book-author">${addAuthor.value}</h4>
    <p class="book-pages">${addPages.value}</p>
    <h5 class="reading-status">finished reading</h5>
    <div class="toggle-button-cover">
        <div class="button r">
            <input class="checkbox" type="checkbox">
            <div class="knobs"></div>
            <div class="layer"></div>
        </div>
    </div>
    
    `
    addBookToLibrary()
    
});



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