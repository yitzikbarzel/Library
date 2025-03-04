//Constructor for creating book objects
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}
// My library array
const myLibrary = []

//add a book to the "My library array"

function addABook(book) {
    myLibrary.push(book);

}

let book1 = new book("momy", 'yitzik', 89, "read")
addABook(book1);

console.log(book1.info())
console.log(myLibrary)

let center = document.querySelector(".center")
let form = document.querySelector("form")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const formValues = [...formData.values()];
    const newbook = new book(...formValues)
    let newDiv = document.createElement("div")
    let newTitel = document.createElement('h1')
    let newAuthor = document.createElement('p')
    let numOfPages = document.createElement('p')
    let isRead = document.createElement('button')
    let deleteButton = document.createElement('p')
    deleteButton.classList.add('delete')

    newTitel.textContent = newbook.title
    newAuthor.textContent = "by: " + newbook.author;
    numOfPages.textContent = newbook.pages;
    if (newbook.read) {
        isRead.textContent = "Read"
    } else {
        isRead.textContent = "not Read"
    }
    deleteButton.textContent ='delete'
    isRead.classList.add('isReadButton')
    center.appendChild(newDiv)
    newDiv.appendChild(newTitel)
    newDiv.appendChild(newAuthor)
    newDiv.appendChild(numOfPages)
    newDiv.appendChild(isRead)
    newDiv.appendChild(deleteButton)
    deleteButton.addEventListener('click', (e)=>{
        newDiv.remove()
    })
    
    e.target.reset()


    console.log(newbook.info())
})


document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('isReadButton')) {
        if (e.target.textContent == "Read") {
            e.target.textContent = 'not Read'
        } else {
            e.target.textContent = 'Read'
        }
    }
})

// document.body.addEventListener('click', (e) => {
//     if (e.target.classList.contains('deleteButton')) {
        
//     }
// })
