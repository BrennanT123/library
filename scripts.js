let myLibrary = [];

//book constructor

function Book(title,author,read)
{
    this.title = title;
    this.author = author;
    this.read = read;
}

//adds new book to library array. Also sends it to the table to be added to the dom
function addBookToLibrary(table,title,author,read)
{
    const newBook = new Book(title,author,read);
    myLibrary.push(newBook);
    addToTable(table,myLibrary);
}

//adds book to table
function addToTable(table,newLibrary)
{
    addNewBook= newLibrary.pop();
    let newRow = table.insertRow(-1);
    let titleCell = newRow. insertCell(0);
    let newTitle = document.createTextNode(addNewBook.title);
    titleCell.appendChild(newTitle);

    let authorCell = newRow. insertCell(1);
    let newAuthor = document.createTextNode(addNewBook.author);
    authorCell.appendChild(newAuthor);

    let readCell = newRow. insertCell(2);
    let newRead = document.createTextNode(addNewBook.read);
    readCell.appendChild(newRead);
}


//button 
const libform = document.querySelector('#submitBook');
//book info
const inputTitle = document.querySelector('#bookTitle');
const inputAuthor = document.querySelector('#bookAuthor');
const inputRead = document.querySelector('#bookRead');
//table
const libraryTable = document.querySelector('#libraryTable');
//when button is clicked add values from form to the new library and  send to table
libform.addEventListener('click',() => {addBookToLibrary(libraryTable,inputTitle.value,inputAuthor.value,inputRead.value); inputAuthor.value = ''; inputTitle.value =''; inputRead.value = '';});



