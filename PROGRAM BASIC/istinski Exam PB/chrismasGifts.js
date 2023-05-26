// Коледа наближава и Иван решава да купи по един подарък за всеки от семейството си.
//  Той си прави списък с хората, на които иска да подари нещо. 
//  Това, какъв подарък ще купи зависи от възрастта на хората в списъка му:
// •	Всички до 16 (вкл.) години се считат за деца и ще получат играчка
// •	Всички над 16 години се считат за възрастни и ще получат коледен пуловер
// •	Цената на всяка играчка е 5 лв., а цената на един пуловер е 15 лв.
// Напишете програма, която пресмята колко души от семейството на Иван са до 16 (вкл.) години и колко са над тази възраст, също и колко пари ще струват подаръците на децата и възрастните.
// Вход:
// От конзолата се четат поредица от редове до получаване на команда "Christmas":
// •	Годините на всеки член от семейството - цяло число в интервала [1 … 130] 
// Изход:
// Да се отпечатат на конзолата четири реда:
// •	"Number of adults: {брой хора над 16 години}" 
// •	"Number of kids: {брой хора до 16 (вкл.) години}"
// •	"Money for toys: {сумата за всички играчки}"
// •	"Money for sweaters: {сума за всички пуловери}"

function ChristmasGifts(input) {
    let index = 0
    let command = (input[index])
    index++
    let praceOfToy = 5
    let praceOfPulover = 15
    let counterNad16 = 0
    let counterPod16 = 0

    while (command !== "Christmas") {
        let age = Number(command)
        if (age <= 16) {
            counterPod16++
        } else {
            counterNad16++
        }
        command = (input[index])
        index++
    }
    let moneyFotToys = counterPod16 * praceOfToy
    let moneyForPulover = counterNad16 * praceOfPulover

    console.log(`Number of adults: ${counterNad16}`);
    console.log(`Number of kids: ${counterPod16}`);
    console.log(`Money for toys: ${moneyFotToys}`)
    console.log(`Money for sweaters: ${moneyForPulover}`);

}

ChristmasGifts(["18",
    "20",
    "48",
    "45",
    "56",
    "37",
    "12",
    "14",
    "Christmas"])



