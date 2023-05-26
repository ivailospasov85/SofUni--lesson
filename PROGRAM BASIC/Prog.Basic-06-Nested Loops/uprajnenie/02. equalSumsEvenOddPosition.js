// Напишете функция, която получава две шестцифрени цели числа в диапазона от 100000 до 300000. 
// Винаги първото въведено число ще бъде по малко от второто.
//  На конзолата да се отпечатат на 1 ред разделени с интервал всички числа, които се намират между двете, прочетени от конзолата числа и отговарят на следното условие:
// •	сумата от цифрите на четни и нечетни позиции да са равни. Ако няма числа, отговарящи на условието на конзолата не се извежда резултат. 

function equalSumsEvenOdd(input) {
    let startingNumber = Number(input[0]);
    let endingNumber = Number(input[1]);

    let buff = ''
    for (let curNumber = startingNumber; curNumber <= endingNumber; curNumber++) {
        // let curNumber = input[i]
        let evenPosition = 0
        let oddPosition = 0
        let curNumberAsString = String(curNumber)



        for (let i = 0; i < curNumberAsString.length; i++) {
            let curNumberAsBokva = Number(curNumberAsString[i])
            let position = i + 1

            if (position % 2 === 0) {
                evenPosition += curNumberAsBokva
            } else {
                oddPosition += curNumberAsBokva
            }



        } if (evenPosition === oddPosition) {
            buff += curNumberAsString + ' ';

        }

    } console.log(buff)




}

equalSumsEvenOdd
    (["100115",
        "100120"])










