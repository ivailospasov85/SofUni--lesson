// Марин и Нели си купуват къща не далеч от София. Нели толкова много обича цветята, че Ви убеждава да напишете функция, която да изчисли колко  ще им струва, 
// да си засадят определен брой цветя и дали наличния бюджет ще им е достатъчен. Различните цветя са с различни цени. 
// цвете	           Роза	Далия	Лале	Нарцис	Гладиола
// Цена на брой в лева	5	3.80	2.80	3	    2.50
// Съществуват следните отстъпки:
// •	Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
// •	Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена
// •	Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
// •	Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
// •	Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%
// Функцията получава 3 аргумента:
// •	Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
// •	Брой цветя - цяло число в интервала [10…1000]
// •	Бюджет - цяло число в интервала [50…2500]
// Да се отпечата на конзолата на един ред:
// •	Ако бюджета им е достатъчен - "Hey, you have a great garden with {броя цвета} {вид цветя} and {останалата сума} leva left."
// •	Ако бюджета им е НЕ достатъчен - "Not enough money, you need {нужната сума} leva more."
// Сумата да бъде форматирана до втория знак след десетичната запетая.

function newHouse(input) {
    let flowersType = (input[0]);
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let pricePerFlower = 0;

    switch (flowersType) {
        case "Roses":
            pricePerFlower = flowersCount * 5;
            if (flowersCount > 80) {
                pricePerFlower *= 0.90;
            } break;
        case "Dahlias":
            pricePerFlower = flowersCount * 3.80;
            if (flowersCount > 90) {
                pricePerFlower *= 0.85;
            } break;
        case "Tulips":
            pricePerFlower = flowersCount * 2.80;
            if (flowersCount > 80) {
                pricePerFlower *= 0.85;
            } break;
        case "Narcissus":
            pricePerFlower = flowersCount * 3;
            if (flowersCount < 120) {
                pricePerFlower *= 1.15;
            } break;
        case "Gladiolus":
            pricePerFlower = flowersCount * 2.50;
            if (flowersCount < 80) {
                pricePerFlower *= 1.20;
            } break;
    }
    // pricePerFlower = pricePerFlower * flowersCount;
    let price1 = budget - pricePerFlower;
    let price2 = pricePerFlower - budget;
    if (budget >= pricePerFlower) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${price1.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${price2.toFixed(2)} leva more.`);
    }
}

newHouse(["Roses",
    "85",
    "250"])






