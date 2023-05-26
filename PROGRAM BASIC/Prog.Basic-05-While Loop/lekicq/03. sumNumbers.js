// Напишете функция, която чете цяло число от масив и на всеки следващ ред цели числа, 
// докато тяхната сума стане по-голяма или равна на първоначалното число. 
// След приключване да се отпечата сумата на въведените числа.

function sumNumbers(input) {
    let index = 0
    let num = Number(input[index]);
    index++


    let sum = 0

    while (sum<num) {

        let num2 = Number(input[index])
        sum += Number(num2)
        index++
    }console.log(sum);
}
    


sumNumbers
    (["20",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"])

