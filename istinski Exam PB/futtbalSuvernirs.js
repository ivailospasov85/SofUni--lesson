// На почивката между полувремената на мача Бразилия vs Германия - Пепи решава да си закупи сувенир за спомен от световното първенство по футбол. 
// На щанд пред стадиона се предлагат различни стоки, като цените им зависят от отбора на дадената страна. Напишете програма, която изчислява сумата за закупените сувенири.
// Отборите и цените на стоките са както следва:
//  	Аржентина	Бразилия	Хърватия	Дания
// флагчета	3.25 лв.	4.20 лв.	2.75 лв.	3.10 лв.
// шапки	7.20 лв.	8.50 лв.	6.90 лв.	6.50 лв.
// плакати	5.10 лв.	5.35 лв.	4.95 лв.	4.80 лв.
// стикери	1.25 лв.	1.20 лв.	1.10 лв.	0.90 лв.
// Вход:
// От конзолата се четат 3 реда:
// •	Първият ред – отбор – текст с възможности: "Argentina", "Brazil", "Croatia", "Denmark"
// •	Вторият ред – вид сувенири – текст с възможности: "flags", "caps", "posters", "stickers" 
// •	Третият ред – брой закупени сувенири – цяло число в интервала [1…200]
// Изход:
// Да се отпечата на конзолата един ред :
// •	Ако страната и стоката са правилно зададени:
//          	 ''Pepi bought {брой сувенири} {вид сувенири} of {отбор} for {крайна сума} lv.''
// •	Ако страната не е правилно зададена:
//     	"Invalid country!"
// •	Ако  стоката не е правилно зададена:
//     	"Invalid stock!"
// Резултатът да е форматиран до втората цифра след десетичната запетая..

function suvenirs(input) {
    let teamName = input[0];
    let typeSuvenirs = input[1]
    let nymberbout = Number(input[2])
    let price = 0

    switch (teamName) {
        case ("Argentina"):
            if (typeSuvenirs === "flags") {
                price = 3.25
            } else if (typeSuvenirs === "caps") {
                price = 7.20
            } else if (typeSuvenirs === "posters") {
                price = 5.10
            } else if (typeSuvenirs === "stickers") {
                price = 1.25
            } break;

        case ("Brazil"):
            if (typeSuvenirs === "flags") {
                price = 4.20
            } else if (typeSuvenirs === "caps") {
                price = 8.50
            } else if (typeSuvenirs === "posters") {
                price = 5.35
            } else if (typeSuvenirs === "stickers") {
                price = 1.20
            } break;

        case ("Croatia"):
            if (typeSuvenirs === "flags") {
                price = 2.75
            } else if (typeSuvenirs === "caps") {
                price = 6.90
            } else if (typeSuvenirs === "posters") {
                price = 4.95
            } else if (typeSuvenirs === "stickers") {
                price = 1.10
            } break;

        case ("Denmark"):
            if (typeSuvenirs === "flags") {
                price = 3.10
            } else if (typeSuvenirs === "caps") {
                price = 6.50
            } else if (typeSuvenirs === "posters") {
                price = 4.80
            } else if (typeSuvenirs === "stickers") {
                price = 0.90
            } break;
    }
    if (teamName !== "Argentina" && teamName !== "Brazil" && teamName !== "Croatia" && teamName !== "Denmark") {
        console.log("Invalid country!");
    } else if (typeSuvenirs !== "flags" && typeSuvenirs !== "caps" && typeSuvenirs !== "posters" && typeSuvenirs !== "stickers") {
        console.log("Invalid stock!");
    } else {
        let endPrice = nymberbout * price
        console.log(`Pepi bought ${nymberbout} ${typeSuvenirs} of ${teamName} for ${endPrice.toFixed(2)} lv.`);
    }

}

suvenirs(["Argentina",
    "shirts",
    "35"])



