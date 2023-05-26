// // Напишете функция, която проверява всички възможни комбинации от двойка числа в интервала от две дадени числа. 
// На изхода се отпечатва, коя поред е първата комбинацията, чийто сбор от числата е равен на дадено магическо число. 
// Ако няма нито една комбинация отговаряща на условието се отпечатва съобщение, че не е намерено.
// // Вход
// // Функцията получава масив от 3 елемента:
// // •	Първи – начало на интервала – цяло число в интервала [1...999]
// // •	Втори – край на интервала – цяло число в интервала [по-голямо от първото число...1000]
// // •	Трети – магическото число – цяло число в интервала [1...10000]
// // Изход
// // На конзолата трябва да се отпечата един ред, според резултата:
// // •	При първата намерена комбинация, чиито сбор на числата е равен на магическото число:
// // o	"Combination N:{пореден номер} ({първото число} + {второ число} = {магическото число})"
// // •	Ако не е намерена комбинация отговаряща на условието:
// // o	"{броят на всички комбинации} combinations - neither equals {магическото число}"


function sumOfTwoNumbers(input) {
    let startingNumber = Number(input[0]);
    let endingNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0
    let isFound = false


    for (let i = startingNumber; i <= endingNumber; i++) {

        for (let x = startingNumber; x <= endingNumber; x++) {
            counter++
            if (i + x === magicNumber) {

                console.log(`Combination N:${counter} (${i} + ${x} = ${magicNumber})`)
                isFound = true
                break;
            }

        }
        if (isFound === true) {
            break;
        }
    } if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
    }
}

sumOfTwoNumbers
    (["88",
        "888",
        "2000"])

      

