// Атанас решава да прекара отпуската си в Банско и да кара ски. Преди да отиде обаче, трябва да резервира хотел и да изчисли колко ще му струва престоя. 
// Налични са следните видове помещения, със следните цени за престой:
// 	"room for one person" – 18.00 лв за нощувка
// 	"apartment" – 25.00 лв за нощувка 
// 	"president apartment" – 35.00 лв за нощувка
// Според броят на дните, в които ще остане в хотела (пример: 11 дни = 10 нощувки) и видът на помещението, което ще избере, той може да ползва различно намаление. 
// Намаленията са както следва:
// вид помещение	по-малко от 10 дни	между 10 и 15 дни	повече от 15 дни
// room for one person	не ползва намаление	не ползва намаление	не ползва намаление
// apartment	30% от крайната цена	35% от крайната цена	50% от крайната цена
// president apartment	10% от крайната цена	15% от крайната цена	20% от крайната цена
// След престоя, оценката на Атанас за услугите на хотела може да е позитивна (positive) или негативна (negative) . 
// Ако оценката му е позитивна, към цената с вече приспаднатото намаление Атанас добавя 25% от нея. Ако оценката му е негативна приспада от цената 10%.
// Вход
// Входът се чете от конзолата и се състои от три реда:
// •	Първи ред - дни за престой - цяло число в интервала [0...365]
// •	Втори ред - вид помещение - "room for one person", "apartment" или "president apartment"
// •	Трети ред - оценка - "positive"  или "negative"
// Изход
// На конзолата трябва да се отпечата един ред:
// •	Цената за престоят му в хотела, форматирана до втория знак след десетичната запетая.

function skiTrip(input) {
    let nightsSpend = Number(input[0] - 1);
    let roomType = (input[1]);
    let rating = (input[2]);
    let pricePerNight = 0;

    if (roomType == "apartment") {
        pricePerNight = 25.00;
        if (nightsSpend < 10) {
            pricePerNight *= 0.70;
        } else if (nightsSpend < 15) {
            pricePerNight *= 0.65;
        } else {
            pricePerNight *= 0.50;
        };
    } else if (roomType == "president apartment") {
        pricePerNight = 35.00;
        if (nightsSpend < 10) {
            pricePerNight *= 0.90;
        } else if (nightsSpend < 15) {
            pricePerNight *= 0.85;
        } else {
            pricePerNight *= 0.80;
        }
    } else {
        pricePerNight = 18.00
    }
    let totalNightPrice = nightsSpend * pricePerNight;
    if (rating === 'positive') {
        totalNightPrice *= 1.25;
    } else {
        totalNightPrice *= 0.90;
    }
    console.log(totalNightPrice.toFixed(2));
}

skiTrip(["2",
"apartment",
"positive"])



