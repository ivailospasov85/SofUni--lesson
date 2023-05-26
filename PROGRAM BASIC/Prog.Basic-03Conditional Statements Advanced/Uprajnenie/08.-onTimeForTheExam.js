// Студент трябва да отиде на изпит в определен час (например в 9:30 часа). 
// Той идва в изпитната зала в даден час на пристигане (например 9:40). 
// Счита се, че студентът е дошъл навреме, ако е пристигнал в часа на изпита или до половин час преди това. 
// Ако е пристигнал по-рано повече от 30 минути, той е подранил. Ако е дошъл след часа на изпита, 
// той е закъснял. Напишете функция, която получава време на изпит и време на пристигане и отпечатва дали студентът е дошъл навреме,
//  дали е подранил или е закъснял и с колко часа или минути е подранил или закъснял.
// Вход
// Приемат се 4 аргумента:
// •	Първият съдържа час на изпита – цяло число от 0 до 23.
// •	Вторият съдържа минута на изпита – цяло число от 0 до 59.
// •	Третият съдържа час на пристигане – цяло число от 0 до 23.
// •	Четвъртият съдържа минута на пристигане – цяло число от 0 до 59.
// Изход
// На първият ред отпечатайте:
// •	"Late", ако студентът пристига по-късно от часа на изпита.
// •	"On time", ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
// •	"Early", ако студентът пристига повече от 30 минути преди часа на изпита.
// Ако студентът пристига с поне минута разлика от часа на изпита, отпечатайте на следващия ред:
// •	"mm minutes before the start" за идване по-рано с по-малко от 1.
// •	"hh:mm hours before the start" за подраняване с 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:05".
// •	 "mm minutes after the start" за закъснение под час.
// •	"hh:mm hours after the start" за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:03".


function onTimeForExam(input) {
    let timeHoursOnExam = Number(input[0]);
    let timeMinuetsExam = Number(input[1]);
    let arrivalTimeHoursForExam = Number(input[2]);
    let arrivalTimeMinuetsForExam = Number(input[3]);

    let timeOfExamOne = timeHoursOnExam * 60 + timeMinuetsExam;
    let arrivalOfExam = arrivalTimeHoursForExam * 60 + arrivalTimeMinuetsForExam;
    let timeDifference = Math.abs(timeOfExamOne - arrivalOfExam);
    let studentTimeHours = Math.floor(timeDifference / 60);
    let studentTimeMinutes = timeDifference % 60;

    if (studentTimeHours > 0 && studentTimeMinutes < 10) {
        studentTimeMinutes = `0${studentTimeMinutes}`;
    }

    if (timeOfExamOne === arrivalOfExam) {
        console.log("On time");

    } else if (timeOfExamOne < arrivalOfExam) {
        console.log("Late");
        if (timeDifference < 60) {
            console.log(`${studentTimeMinutes} minutes after the start`);
        }
        else {
            console.log(`${studentTimeHours}:${studentTimeMinutes} hours after the start`);
        }

    } else {
        if (timeDifference <= 30 && timeDifference !== 0) {
            console.log("On time");
            console.log(`${studentTimeMinutes} minutes before the start`);
        }
        else if (timeDifference < 60) {
            console.log("Early");
            console.log(`${studentTimeMinutes} minutes before the start`);
        }
        else  {
            console.log("Early")
            console.log(`${studentTimeHours}:${studentTimeMinutes} hours before the start`);
        }

        }

}

    onTimeForExam
    (["11",
"30",
"12",
"29"])







    



































