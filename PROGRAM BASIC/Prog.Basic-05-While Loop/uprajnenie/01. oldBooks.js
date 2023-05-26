// Ани отива до родния си град след много дълъг период извън страната. 
// Прибирайки се вкъщи тя вижда старата библиотека на баба си и си спомня за любимата си книга. 
// Помогнете на Ани, като напишете функция в която тя въвежда търсената от нея книга(текст). 
// Докато Ани не намери любимата си книга или не провери всички в библиотеката, програмата трябва да чете всеки път на нов ред името на всяка следваща книга (текст).
//  Книгите в библиотеката са свършили щом получите текст "No More Books".
// •	Ако не открие книгата да се отпечата на два реда: 
// o	"The book you search is not here!"
// o	"You checked {брой} books."
// •	Ако открие книгата си се отпечатва един ред:
// o	"You checked {брой} books and found it."  

function oldBook(input) {
    let index = 0
    let Book = input[index]
    index++
    let searchBook = input[index]
    index++
    bookCount = 0
    let bookFound = false
    while (searchBook !== 'No More Books') {
        
        if (searchBook === Book) {
            bookFound = true
            console.log(`You checked ${bookCount} books and found it.`);
            break;
        } searchBook = input[index]
        index++
        bookCount++
        if (bookCount>= input.length) {
            bookFound = false
        break
        }
    } if (!bookFound) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCount} books.`);
    }


}

oldBook
    (["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])
    


