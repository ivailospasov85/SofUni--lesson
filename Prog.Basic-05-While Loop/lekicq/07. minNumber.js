
// Напишете функция, която до получаване на командата "Stop", 
// чете цели числа, и намира най-малкото измежду тях. 
// Въвежда се по едно число на ред. 

function minNumber(input) {
    let index = 0
    let number = input[index]
    index++
    let minNumber = Number.MAX_SAFE_INTEGER

    while (number !== "Stop") {
        let currentNumber = Number(number)
        if (currentNumber < minNumber) {
            minNumber = currentNumber;
        }
        number = input[index]
        index++
    }
    console.log(minNumber);
}
minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])

