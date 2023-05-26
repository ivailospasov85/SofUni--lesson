// Курсът "Train the trainers" е към края си и финалното оценяване наближава. 
// Вашата задача е да помогнете на журито,  което ще оценява презентациите, като напишете функция,  
// която да изчислява средната оценка от представянето на всяка една презентация от даден студент, а накрая средният успех от всички тях.
// От първия елемент на масива се прочита броят на хората в журито n - цяло число в интервала [1…20]
// След това името на презентацията - текст
// За всяка една презентация като нов елемент се чете n - на брой оценки - реално число в интервала [2.00…6.00]
// След изчисляване на средната оценка за конкретна презентация, на конзолата се печата
//  "{името на презентацията} - {средна оценка}."
// След получаване на команда "Finish" на конзолата се печата "Student's final assessment is {среден успех от всички презентации}." и програмата приключва.
// Всички оценки трябва да бъдат форматирани до втория знак след десетичната запетая.

function trainTheTrainers(input) {
    let index = 0
    let numberOfTeachers = input[index]
    index++
    let command = input[index]
    index++
    let totalSum = 0
    let counter = 0
    while (command !== "Finish") {
        let nameOfProjekt = command
        let averigeSum = 0
        for (let i = 1; i <= numberOfTeachers; i++) {

            let ratingOne = Number(input[index])
            index++

            counter++
            averigeSum += ratingOne



        }
        totalSum += averigeSum
        averigeSum /= numberOfTeachers
        console.log(`${nameOfProjekt} - ${averigeSum.toFixed(2)}.`);


        command = input[index]
        index++
    }
    totalSum /= counter
    console.log(`Student's final assessment is ${totalSum.toFixed(2)}.`);
}

trainTheTrainers
    (["2",
        "Objects and Classes",
        "5.77",
        "4.23",
        "Dictionaries",
        "4.62",
        "5.02",
        "RegEx",
        "2.88",
        "3.42",
        "Finish"])





