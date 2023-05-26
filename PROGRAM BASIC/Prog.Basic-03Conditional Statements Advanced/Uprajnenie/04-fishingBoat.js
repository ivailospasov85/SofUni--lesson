// Тони и приятели много обичали да ходят за риба, те са толкова запалени по риболова, че решават да отидат на риболов с кораб. 
// Цената за наемане на кораба зависи от сезона и броя рибари.
// Цената зависи от сезона:
// •	Цената за наем на кораба през пролетта е  3000 лв.
// •	Цената за наем на кораба през лятото и есента е  4200 лв.
// •	Цената за наем на кораба през зимата е  2600 лв.
// В зависимост от броя си групата ползва отстъпка:
// •	Ако групата е до 6 човека включително  –  отстъпка от 10%.
// •	Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
// •	Ако групата е от 12 нагоре  –  отстъпка от 25%. 
// Рибарите ползват допълнително 5% отстъпка ако са четен брой освен ако не е есен - тогава нямат допълнителна отстъпка. 
// Напишете функция, която да пресмята дали рибарите ще съберат достатъчно пари. 
// Вход
// Приемат се 3 аргумента:
// •	Бюджет на групата – цяло число в интервала [1…8000]
// •	Сезон –  текст : "Spring", "Summer", "Autumn", "Winter"
// •	Брой рибари – цяло число в интервала [4…18]
// Изход
// Да се отпечата на конзолата един ред:
// •	Ако бюджетът е достатъчен:
// "Yes! You have {останалите пари} leva left."
// •	Ако бюджетът НЕ Е достатъчен:
// "Not enough money! You need {сумата, която не достига} leva."
// Сумите трябва да са форматирани с точност до два знака след десетичната запетая.

function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = (input[1]);
    let fishermanCount = Number(input[2]);
    let boatRent = 0;

    switch (season) {
        case 'Spring':
            boatRent = 3000
            if (fishermanCount <= 6) {
                boatRent *= 0.90;
            } else if (fishermanCount <= 11) {
                boatRent *= 0.85;
            } else {
                boatRent *= 0.75;
            } if (fishermanCount % 2 === 0) {
                boatRent = boatRent - (boatRent * 0.05);
            } break;
        case 'Summer':
            boatRent = 4200
            if (fishermanCount <= 6) {
                boatRent *= 0.90;
            } else if (fishermanCount <= 11) {
                boatRent *= 0.85;
            } else {
                boatRent *= 0.75;
            } if (fishermanCount % 2 === 0) {
                boatRent = boatRent - (boatRent * 0.05)
            } break;
        case 'Autumn':
            boatRent = 4200
            if (fishermanCount <= 6) {
                boatRent *= 0.90;
            } else if (fishermanCount <= 11) {
                boatRent *= 0.85;
            } else {
                boatRent *= 0.75;
            } break;
        case 'Winter':
            boatRent = 2600
            if (fishermanCount <= 6) {
                boatRent *= 0.90;
            } else if (fishermanCount <= 11) {
                boatRent *= 0.85;
            } else {
                boatRent *= 0.75;
            } if (fishermanCount % 2 === 0) {
                boatRent = boatRent - (boatRent * 0.05)
            } break;
    }
    let priceOne=budget-boatRent;
    let priceTwo=boatRent-budget;
 if (budget>=boatRent){
    console.log(`Yes! You have ${priceOne.toFixed(2)} leva left.`);
 }else{
    console.log(`Not enough money! You need ${priceTwo.toFixed(2)} leva.`);
 }


}


fishingBoat(["2000",
"Winter",
"14"])


