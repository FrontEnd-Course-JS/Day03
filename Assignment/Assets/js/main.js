let book01 = { title: "C++", author: "Eslam Elsaadany", numberOfPages: 150 };
let book02 = { title: "JAVA", author: "Karim Mostafa", numberOfPages: 350 };
let book03 = { title: "C#", author: "Ali Almadboly", numberOfPages: 450 };

let books = [book01, book02, book03];

// declarative function 
function addBook(book) {
    books.push(book);
}

//function expression
let RemoveBook = function () {
    books.pop();
}
//arrow function
let allBooks = ()=>{
    console.log(books);
}

let allBooksForIn = ()=>{
    let i = 1;
    for (const item of books) {
        console.log("("+i+")"+"- title: "+item.title+", author: "+item.author+", pages: "+item.numberOfPages);
        i++
    }
}

let bookTitle = prompt("Enter book title:");
let bookAuthor = prompt("Enter book author:");
let bookPages = Number(prompt("Enter book pages:"));

let userBook = { title: bookTitle, author: bookAuthor, numberOfPages: bookPages };
addBook(userBook);

let i = 1;
books.forEach(element => {
    console.log(i + "- title: " + element.title + ", author: " + element.author + ", pages: " + element.numberOfPages);
    i++;
});

books.unshift(
    {title: "Python", author: "Hamooda Hany", numberOfPages: 900},
    {title: "Ruby", author: "Ahmed Khaled", numberOfPages: 1005},
    {title: "R", author: "Samoraaaaay", numberOfPages: 450},
)

i=1;
books.forEach(element => {
    console.log(i + "- title: " + element.title + ", author: " + element.author + ", pages: " + element.numberOfPages);
    i++;
});

console.log(books.shift());
console.log(books.length);
allBooks();
allBooksForIn();

