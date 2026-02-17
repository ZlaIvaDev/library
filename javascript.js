
const addTitle = document.querySelector('.title');
const addAuthor = document.querySelector('.author');
const addPages = document.querySelector('.pages');
const addReadStatus = document.querySelector('.read');
const addID = document.querySelector('.id');

const mainContainer = document.querySelector('.books-grid');
const finishedBtnTxt = document.querySelector('.reading-status');

function Book(title, pages, author, bstatus, id) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.bstatus = bstatus;
    this.id = id;

}


const myLibrary = [
    {title:'The Count of Monte Cristo', pages:'1276', author:'Alexander Dumas',bstatus:'no',id:crypto.randomUUID()},
    {title:'Hyperion', pages:'483', author:'Dan Simmons',bstatus:'yes',id:crypto.randomUUID()},
    {title:'Fall of Hyperion', pages:'560', author:'Dan Simmons',bstatus:'yes',id:crypto.randomUUID()},
    {title:'The New Jerusalem: Gothic Chronicle', pages:'289', author:'Borislav Pekic',bstatus:'yes',id:crypto.randomUUID()},
];



function addBookToLibrary() {
    let new_book = addTitle.value;
    new_book = new Book(addTitle.value, addPages.value, addAuthor.value, addReadStatus.value, addID.value);
    myLibrary.push(new_book);

    
}

myLibrary.forEach(function showBook(item){
    console.log(item.author);
    const newCard = document.createElement('div');
    newCard.classList.add('cards')
    mainContainer.appendChild(newCard);

    if (item.bstatus == 'no') {
        newCard.innerHTML = `
        <button class="remove-book" type="submit">&times</button>
        <h3 class="book-title">${item.title}</h3
        <h4 class="book-author">${item.author}</h4>
        <p class="book-pages">${item.pages} pages</p>
        <h5 class="reading-status">finished reading</h5>
        <div class="toggle-button-cover">
        <div class="button r">
            <input class="checkbox" type="checkbox" checked>
            <div class="knobs"></div>
            <div class="layer"></div>
        </div>
        </div>
        <h5 class="id">Book ID: ${crypto.randomUUID()}</h5>

    `} else {
        newCard.innerHTML = `
        <button class="remove-book" type="submit">&times</button>
        <h3 class="book-title">${item.title}</h3
        <h4 class="book-author">${item.author}</h4>
        <p class="book-pages">${item.pages} pages</p>
        <h5 class="reading-status">finished reading</h5>
        <div class="toggle-button-cover">
        <div class="button r">
            <input class="checkbox" type="checkbox">
            <div class="knobs"></div>
            <div class="layer"></div>
        </div>
        </div>
        <h5 class="id">Book ID: ${crypto.randomUUID()}</h5>

    ` 
    };
});

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

    if (addReadStatus.value == 'no') {
        newCard.innerHTML = `
        <button class="remove-book" type="submit">&times</button>
        <h3 class="book-title">${addTitle.value}</h3
        <h4 class="book-author">${addAuthor.value}</h4>
        <p class="book-pages">${addPages.value} pages</p>
        <h5 class="reading-status">finished reading</h5>
        <div class="toggle-button-cover">
        <div class="button r">
            <input class="checkbox" type="checkbox" checked>
            <div class="knobs"></div>
            <div class="layer"></div>
        </div>
        </div>
        <h5 class="id">Book ID: ${crypto.randomUUID()}</h5>
    
    `
    addBookToLibrary()

    } else {
        newCard.innerHTML = `
        <button class="remove-book" type="submit">&times</button>
        
        <h3 class="book-title">${addTitle.value}</h3
        <h4 class="book-author">${addAuthor.value}</h4>
        <p class="book-pages">${addPages.value} pages</p>
        <h5 class="reading-status">finished reading</h5>
        <div class="toggle-button-cover">
        <div class="button r">
            <input class="checkbox" type="checkbox">
            <div class="knobs"></div>
            <div class="layer"></div>
        </div>
        </div>
        <h5 class="id">Book ID: ${crypto.randomUUID()}</h5>
    
    `
    addBookToLibrary()
    };    
});


const library = document.querySelector('.books-grid');
library.addEventListener('click', function(e) {
    if (e.target.classList.contains("remove-book")) {
        e.target.parentElement.remove()
    }
})
