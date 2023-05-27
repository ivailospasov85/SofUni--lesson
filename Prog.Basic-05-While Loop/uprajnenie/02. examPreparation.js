// Напишете функция, в която Марин решава задачи от изпити докато не получи съобщение "Enough" от лектора си. 
// При всяка решена задача той получава оценка. 
// Функцията трябва да приключи прочитането на данни при команда "Enough" или ако Марин получи определеният брой незадоволителни оценки.
// Незадоволителна е всяка оценка, която е по-малка или равна на 4.
// Вход
// •	На първи ред - брой незадоволителни оценки - цяло число в интервала [1…5]
// •	След това многократно се четат по два реда:
// o	Име на задача - текст (низ)
// o	Оценка - цяло число в интервала [2…6]
// Изход
// •	Ако Марин стигне до командата "Enough", отпечатайте на 3 реда: 
// o	"Average score: {средна оценка}"
// o	"Number of problems: {броя на всички задачи}"
// o	"Last problem: {името на последната задача}"
// •	Ако получи определеният брой незадоволителни оценки:
// o	"You need a break, {брой незадоволителни оценки} poor grades."
// Средната оценка да бъде форматирана до втория знак след десетичната запетая. 

function examPreparation(input) {
    let index = 0
    let numberPermittedLolScores = Number(input[index])
    index++
    let command = input[index]
    index++



    let nameOfTaskNumbers = 0
    let bedScoreCount = 0
    let averageDegree = 0
    let isExpel = false
    while (command !== "Enough") {

        nameOfTask = command
        nameOfTaskNumbers++
        let commandNumbers = Number(input[index])
        index++
        averageDegree += commandNumbers

        if (commandNumbers <= 4) {
            bedScoreCount++
        } if (bedScoreCount >= numberPermittedLolScores) {
            isExpel = true
            console.log(`You need a break, ${bedScoreCount} poor grades.`)
            break;
        }


        command = input[index]
        index++


    } let average = averageDegree / nameOfTaskNumbers
    if (!isExpel) {
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${nameOfTaskNumbers}`);
        console.log(`Last problem: ${nameOfTask}`);

    }
}

examPreparation
    (["2",
        "Income",
        "3",
        "Game Info",
        "6",
        "Best Player",
        "4"])

