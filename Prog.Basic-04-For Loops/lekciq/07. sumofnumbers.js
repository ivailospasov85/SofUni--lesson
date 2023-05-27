// Напишете функция, която получава цяло число n, сумира всички негови цифри и отпечатва сумата. 
// Вход
// Функцията получава число n.
// Изход
// Да се отпечата на конзолата един ред:
// "The sum of the digits is:{sum}" – където sum е сумата на отделните цифри.

function sumOfNumbers(input) {
    let num = input[0];
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        let currentNumber = Number(num[i]);
        sum += currentNumber;
    } console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["564891"])