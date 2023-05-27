// Пепи иска да напишете програма, чрез която да разбере кой е най-добрият играч от световното първенство. 
// Информацията, която получавате ще бъде играч и колко гола е отбелязал. 
// От вас се иска да отпечатате кой е играчът с най-много голове и дали е направил хет-трик. 
// Хет-трик е, когато футболистът е вкарал 3 или повече гола. Ако футболист е вкарал 10 или повече гола, програмата трябва да спре.

// Вход
// От конзолата се четат по два реда до въвеждане на команда "END":
// •	Име на играч – текст
// •	Брой вкарани голове  – цяло положително число в интервала [1 … 10000]
// Изход
// На конзолата да се отпечатат 2 реда :
// •	На първия ред:
//      	"{име на играч} is the best player!"
// •	На втория ред :
// o	 Ако най-добрият футболист е направил хет-трик:
//          	"He has scored {брой голове} goals and made a hat-trick !!!"
// o	Ако най-добрият футболист НЕ е направил хет-трик:
//                    	"He has scored {брой голове} goals."

function bestPlayer(input) {
    let index = 0
    let command = input[index];
    index++
    let nameOfPlayer = ''
    let maxgols = 0
    let hasScoredHetric = false
    while (command !== "END") {

        let golsScored = Number(input[index]);
        index++


        if (golsScored > maxgols) {
            nameOfPlayer = command
            maxgols = golsScored
            if (maxgols >= 10) {
                break
            }
        }

        command = input[index]
        index++
    }
    console.log(`${nameOfPlayer} is the best player!`);
    if (maxgols >= 3) {
        hasScoredHetric = true
        console.log(`He has scored ${maxgols} goals and made a hat-trick !!!`);
    }
    else {
        console.log(`He has scored ${maxgols} goals.`);
    }
}

bestPlayer
    (["Zidane",
        "1",
        "Felipe",
        "2",
        "Johnson",
        "4",
        "END"])




