// Производителите на вендинг машини искали да направят машините си да връщат възможно най-малко монети ресто. 
// Напишете функция, която приема сума - рестото, което трябва да се върне и изчислява с колко най-малко монети може да стане това. 
// Монетите може да са от 2 лева, 1 лев, 50 стотинки, 20 стотинки, 10 стотинки, 5 стотинки, 2 стотинки или 1 стотинка 

function coins(input) {
    let index = 0
    let money = Number(input[index])
    let moneyInCents =Math.floor(money * 100)
    let counter = 0

    while (moneyInCents > 0) {

        if (moneyInCents >= 200) {

            moneyInCents -= 200;

        } else if (moneyInCents >= 100) {

            moneyInCents -= 100;
        } else if (moneyInCents >= 50) {

            moneyInCents -= 50;
        } else if (moneyInCents >= 20) {

            moneyInCents -= 20;
        } else if (moneyInCents >= 10) {

            moneyInCents -= 10;
        } else if (moneyInCents >= 5) {

            moneyInCents -= 5;
        } else if (moneyInCents >= 2) {

            moneyInCents -= 2;
        } else if (moneyInCents >= 1) {

            moneyInCents -= 1;
        } counter++

        continue

    } console.log(counter);
}
coins(["0.56"])	