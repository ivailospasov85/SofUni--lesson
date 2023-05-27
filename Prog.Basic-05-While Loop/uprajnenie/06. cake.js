// Поканени сте на 30-ти рожден ден, на който рожденикът черпи с огромна торта. 
// Той обаче не знае колко парчета могат да си вземат гостите от нея.
//  Вашата задача е да напишете функция, която изчислява броя на парчетата, които гостите са взели, преди тя да свърши.
//   Ще получите размерите на тортата (широчина и дължина – цели числа в интервала [1...1000])
//    и след това на всеки ред, до получаване на командата "STOP" или докато не свърши тортата, броят на парчетата, които гостите вземат от нея. 
// Бележка: Едно парче торта е с размер 1х1 см.
// Да се отпечата на конзолата един от следните редове:
// •	"{брой парчета} pieces are left." - ако стигнете до STOP и не са свършили парчетата торта
// •	"No more cake left! You need {брой недостигащи парчета} pieces more."

function cake(input) {
    let index = 0
    let length = Number(input[index]);
    index++
    let hight = Number(input[index]);
    index++
    let cake = length * hight
    let eatPieces = input[index]
    index++
    let remainPieces = 0;

    while (eatPieces !=='Stop') {
        remainPieces += Number(eatPieces)
        eatPieces = input[index]
        index++

        if (eatPieces == 'STOP') {
            if (remainPieces > 0) {
                let leftPieces = Math.abs(remainPieces-cake) ;
                console.log(`${leftPieces} pieces are left.`);
                break;
            }

        } else if (remainPieces >= cake) {
            let neededPieces = remainPieces - cake
            console.log(`No more cake left! You need ${neededPieces} pieces more.`);
            break;
        }
    }

}

cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])









