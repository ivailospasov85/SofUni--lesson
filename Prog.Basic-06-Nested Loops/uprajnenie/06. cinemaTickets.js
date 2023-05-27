// Вашата задача е да напишете програма, която да изчислява процента на билетите за всеки тип от продадените билети:
//  студентски(student), стандартен(standard) и детски(kid), за всички прожекции. 
//  Трябва да изчислите и колко процента от залата е запълнена за всяка една прожекция.
// Вход
// Входът е поредица от цели числа и текст:
// •	На първия ред до получаване на командата "Finish" - име на филма – текст
// •	На втори ред – свободните места в салона за всяка прожекция – цяло число [1 … 100]
// •	За всеки филм, се чете по един ред до изчерпване на свободните места в залата или до получаване на командата "End":
// o	Типа на закупения билет - текст ("student", "standard", "kid")
// Изход
// На конзолата трябва да се печатат следните редове:
// •	След всеки филм да се отпечата, колко процента от кино залата е пълна
// "{името на филма} - {процент запълненост на залата}% full."
// •	При получаване на командата "Finish" да се отпечатат четири реда:
// o	"Total tickets: {общият брой закупени билети за всички филми}"
// o	"{процент на студентските билети}% student tickets."
// o	"{процент на стандартните билети}% standard tickets."
// o	"{процент на детските билети}% kids tickets."

function cinemaTicets(input) {
    let index = 0
    let command = input[index]
    index++


    let studentTicets = 0
    let standardTicets = 0
    let kidTicets = 0
    let totalTicetsCounter = 0
    while (command !== "Finish") {
        let movieName = command
        let counter = 0
        let freeSpace = Number(input[index])
        index++
        let procetionsType = input[index]
        index++
        while (procetionsType !== "End") {
            totalTicetsCounter++
            counter++
            if (procetionsType === "standard") {
                standardTicets++

            } else if (procetionsType === "student") {
                studentTicets++
            } else if (procetionsType === "kid") {
                kidTicets++
            }
            if (freeSpace === counter) {
                break
            }
            procetionsType = input[index]
            index++
        } console.log(`${movieName} - ${((counter / freeSpace) * 100).toFixed(2)}% full.`);
        command = input[index]
        index++

    }
    console.log(`Total tickets: ${totalTicetsCounter}`);
    console.log(`${((studentTicets / totalTicetsCounter) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTicets / totalTicetsCounter) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTicets / totalTicetsCounter) * 100).toFixed(2)}% kids tickets.`);

}

cinemaTicets
(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

