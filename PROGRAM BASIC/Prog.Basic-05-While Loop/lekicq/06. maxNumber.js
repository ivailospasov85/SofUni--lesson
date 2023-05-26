// Напишете функция, която до получаване на командата "Stop", чете цели числа и намира най-голямото измежду тях. 
// Въвежда се по едно число на ред. 

function maxNumber(input) {
    let index = 0
    let number = input[index]
    index++
     let maxNumber = Number.MIN_SAFE_INTEGER

    while (number !== "Stop") {
        let currentNumber=Number(number)
        if(currentNumber > maxNumber) {
        maxNumber=currentNumber;
        }
        number = input[index]
        index++
    }
    console.log(maxNumber);
}

maxNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])
