// Поканени сте от академията да напишете софтуер, който да пресмята точките за актьор/актриса. Академията ще ви даде първоначални точки за актьора. 
// След това всеки оценяващ ще дава своята оценка. Точките, които актьора получава се формират от: дължината на името на оценяващия умножено по точките, които дава делено на две. 
// Ако резултатът в някой момент надхвърли 1250.5 програмата трябва да прекъсне и да се отпечата, че дадения актьор е получил номинация.
// Вход
// •	Име на актьора - текст
// •	Точки от академията - реално число в интервала [2.0... 450.5]
// •	Брой оценяващи n - цяло число в интервала[1… 20]
// На следващите n-на брой реда:
// o	Име на оценяващия - текст
// o	Точки от оценяващия - реално число в интервала [1.0... 50.0]
// Изход
// Да се отпечата на конзолата един ред:
// •	Ако точките са над 1250.5:
// "Congratulations, {име на актьора} got a nominee for leading role with {точки}!"
// •	Ако точките не са достатъчни:
// 	"Sorry, {име на актьора} you need {нужни точки} more!"
// Резултатът да се форматирана до първата цифра след десетичния знак!
function oscars(input) {
    let nameOfActors = input[0];
    let startingPoints = Number(input[1]);
    let evaluativeNumber = Number(input[2]);

    for (let i = 3; i < input.length; i += 2) {
        let judeName = input[i];
        let judePoint = Number(input[i + 1]);
        let totalPoint = judeName.length * judePoint / 2
        startingPoints += totalPoint;
        if (startingPoints > 1250.5) {
            console.log(`Congratulations, ${nameOfActors} got a nominee for leading role with ${startingPoints.toFixed(1)}!`);
            break;
        }
    } if (startingPoints <= 1250) {
        let missingPoint = 1250.5 - startingPoints;
        console.log(`Sorry, ${nameOfActors} you need ${missingPoint.toFixed(1)} more!`)
    }

}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

