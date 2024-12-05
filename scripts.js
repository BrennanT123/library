let myLibrary = [];

//book constructor

function Book(title,author,read)
{
    this.title = title;
    this.author = author;
    if(read.checked)
    {
        this.read = 1;
    }
    else
    {
        this.read = 0;
    }
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
    let readButton = document.createElement("input");
    readButton.type = "checkbox";
    if(addNewBook.read ==0)
    {
    newRow.style.backgroundColor = "red";
    }
    else
    {
        newRow.style.backgroundColor = "green";
    }
    readButton.addEventListener("change",() => {
        if(readButton.checked)
        {
            newRow.style.backgroundColor = "green";
        }else{
            newRow.style.backgroundColor = "red";
        }
    })
    readCell.appendChild(readButton);




    let deleteCell = newRow.insertCell(3);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener("click",() => {newRow.remove();});
    deleteCell.appendChild(deleteButton);


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
libform.addEventListener('click',() => {addBookToLibrary(libraryTable,inputTitle.value,inputAuthor.value,inputRead); inputAuthor.value = ''; inputTitle.value =''; inputRead.value = ''; dialog.close();});


//open dialog
const dialog = document.querySelector("#bookDialog");
const showDialog= document.querySelector('#bookAddButton');
showDialog.addEventListener("click", () => {dialog.showModal();})

