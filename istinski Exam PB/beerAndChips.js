// По време на мач Пепи решава да си купи бира и чипс от магазинчето в стадиона.
//  Вашата задача е да напишете програма, с която ще разберете дали има необходимите пари и дали ще успее да си закупи съответните неща. 
//  Цената на една бира е 1.20 лв., а цената на един пакет чипс е равна на 45% от общата стойност на закупените бири. 
//  Общата цена на чипса да се закръгли до по-голямо число.

// Вход
// От конзолата се четат 4 реда:
// •	На първия ред - името на футболният фен – текст
// •	На втория ред - предвиденият бюджет  – реално число в диапазона [1.0… 100 000.0]
// •	На третия ред - брой бутилки бира – цяло число в диапазона [1… 100 000]
// •	На четвърти ред - брой пакети чипс – цяло число в диапазона [1… 100 000]


// Изход
// Да се отпечата един ред:
// •	Ако бюджетът е достатъчен за закупуването на продуктите: 
//  "{име} bought a snack and has {останали пари} leva left."
// •	Ако бюджетът НЕ е достатъчен:
// "{име} needs {нужни пари} more leva!"
// Резултатът да се форматира до втория знак след десетичната запетая.

function beerAndChips(input) {
    let name = input[0]
    let budget = Number(input[1])
    let bottleBeer = Number(input[2])
    let chips = Number(input[3])
    let praceOfBeer = 1.20

    let beers = bottleBeer * praceOfBeer
    let chipsPrice = beers * 0.45

    totalChips = Math.ceil(chipsPrice * chips)
    let expences = beers + totalChips
    let total = budget - expences

    if (budget >= expences) {
        console.log(`${name} bought a snack and has ${total.toFixed(2)} leva left.`);
    } else {
        let neededMoney = (expences - budget).toFixed(2)
        console.log(`${name} needs ${neededMoney} more leva!`);
    }

}

beerAndChips(["Valentin",
"5",
"2",
"4"])
