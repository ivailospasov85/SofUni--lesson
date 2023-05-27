// Григор Димитров е тенисист, чиято следваща цел е изкачването в световната ранглиста по тенис за мъже. 
// През годината Гришо участва в определен брой турнири, като за всеки турнир получава точки, които зависят от позицията, на която е завършил в турнира. Има три варианта за завършване на турнир:
// 	W - ако е победител получава 2000 точки
// 	F - ако е финалист получава 1200 точки
// 	SF - ако е полуфиналист получава 720 точки
// Напишете програма, която изчислява колко ще са точките на Григор след изиграване на всички турнири, като знаете с колко точки стартира сезона. Също изчислете колко точки средно печели от 
// всички изиграни турнири и колко процента от турнирите е спечелил. 
// Вход
// От конзолата първо се четат два реда:
// •	Брой турнири, в които е участвал – цяло число в интервала [1…20] 
// •	Начален брой точки в ранглистата - цяло число в интервала [1...4000]
// За всеки турнир се прочита отделен ред:
// •	Достигнат етап от турнира – текст – "W", "F" или "SF"
// Изход
// Отпечатват се три реда в следния формат:
// •	"Final points: {брой точки след изиграните турнири}"
// •	"Average points: {средно колко точки печели за турнир}"
// •	"{процент спечелени турнири}%"
// Средните точки да бъдат закръглени към най-близкото цяло число надолу, 
// а процентът да се форматира до втората цифра след десетичния знак.

function tennisRankList(input) {
    let tournamentCount = Number(input[0])
    let startingPoint = Number(input[1])
    let bonusPoints = 0
    let wins = 0
    let allBonusPoints = 0
    for (let i = 2; i <input.length ; i++) {
        let tournamentResult = input[i];

        if (tournamentResult === 'W') {
            wins++
            bonusPoints = 2000;
            allBonusPoints += bonusPoints
            startingPoint += bonusPoints;
        } else if (tournamentResult === 'F') {
            bonusPoints = 1200;
            allBonusPoints += bonusPoints
            startingPoint += bonusPoints;
        } else if (tournamentResult === 'SF') {
            bonusPoints = 720;
            allBonusPoints += bonusPoints
            startingPoint += bonusPoints;
        }
    }
    console.log(`Final points: ${startingPoint}`);
    console.log(`Average points: ${Math.flo(allBonusPoints / tournamentCount)}`);
    console.log(`${((wins / tournamentCount) * 100).toFixed(2)}%`);
}
tennisRankList
(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])

