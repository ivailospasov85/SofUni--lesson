// Лято е с много променливо време и Виктор има нужда от вашата помощ. Напишете функция, 
//  която спрямо времето от денонощието и градусите да препоръча на Виктор какви дрехи да си облече. 
//  Вашия приятел има различни планове за всеки етап от деня, които изискват и различен външен вид, тях може да видите от таблицата.
// Функцията получава два аргумента:
// •	Градусите - цяло число в интервала [10…42]
// •	Текст, време от денонощието - с възможности - "Morning", "Afternoon", "Evening"

function sumerOutfit(input) {
    let deGrees = Number(input[0]);
    let timeOfTheDay = (input[1]);
    let outfit = '';
    let shoes = '';

    switch (timeOfTheDay) {
        case 'Morning':
            if (deGrees <= 18) {
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
            } else if ( deGrees <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            } break;
        case 'Afternoon':
            if ( deGrees <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (deGrees <= 24) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            } else {
                outfit = 'Swim Suit';
                shoes = 'Barefoot';
            } break;
        case 'Evening':
            if (deGrees <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (deGrees <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } break;
    } 
    console.log(`It's ${deGrees} degrees, get your ${outfit} and ${shoes}.`)
}

sumerOutfit(["28",
    "Evening"])


