// Хотелска стая
// Хотел предлага 2 вида стаи: студио и апартамент. Напишете функция, която изчислява цената за целия престой за студио и апартамент. 
// Цените зависят от месеца на престоя:
// Май и октомври	Юни и септември	Юли и август
// Студио – 50 лв./нощувка	Студио – 75.20 лв./нощувка	Студио – 76 лв./нощувка
// Апартамент – 65 лв./нощувка	Апартамент – 68.70 лв./нощувка	Апартамент – 77 лв./нощувка
// Предлагат се и следните отстъпки:
// •	За студио, при повече от 7 нощувки през май и октомври : 5% намаление.
// •	За студио, при повече от 14 нощувки през май и октомври : 30% намаление.
// •	За студио, при повече от 14 нощувки през юни и септември: 20% намаление.
// •	За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление.
// Вход
// Получават се 2 аргумента:
// •	 месецът – May, June, July, August, September или October
// •	броят на нощувките – цяло число в интервала [0 … 200]
// Изход
// Да се отпечатат на конзолата 2 реда:
// •	На първия ред: “Apartment: {цена за целият престой} lv.”
// •	На втория ред: “Studio: {цена за целият престой} lv.”
// Цената за целия престой форматирана с точност до два знака след десетичната запетая.

function hotelRoom(input) {
    let mount = (input[0]);
    let nightsSpend = Number(input[1]);
    let studioPerNight = 0;
    let apartmentPerNight = 0;

    if (mount == 'May' || mount == 'October') {
        studioPerNight = 50;
        apartmentPerNight = 65;
        if (nightsSpend > 14) {
            studioPerNight *= 0.70;
            apartmentPerNight *= 0.90;
        } else if (nightsSpend > 7 && nightsSpend <= 14) {
            studioPerNight *= 0.95;
        }
    } else if (mount == 'June' || mount == "September") {
        studioPerNight = 75.20;
        apartmentPerNight = 68.70;
        if (nightsSpend > 14) {
            studioPerNight *= 0.80;
            apartmentPerNight *= 0.90;
        }
    } else if (mount == 'July' || mount == 'August') {
        studioPerNight = 76;
        apartmentPerNight = 77;
        if (nightsSpend > 14) {
            apartmentPerNight *= 0.90;
        }
    }
    let studioTotalPrice = studioPerNight * nightsSpend;
    let apartmentTotalPrice = apartmentPerNight * nightsSpend;

    console.log(`Apartment: ${apartmentTotalPrice.toFixed(2)} lv.`)
    console.log(`Studio: ${studioTotalPrice.toFixed(2)} lv.`)
}

hotelRoom
    (["May",
        "15"])












