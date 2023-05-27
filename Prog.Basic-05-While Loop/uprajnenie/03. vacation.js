// Джеси е решила да събира пари за екскурзия и иска от вас да ѝ помогнете да разбере дали ще успее да събере необходимата сума. 
// Тя спестява или харчи част от парите си всеки ден. 
// Ако иска да похарчи повече от наличните си пари, то тя ще похарчи всичко, което има и ще ѝ останат 0 лева.
// Вход
// От масива се четат:
// •	Пари нужни за екскурзията - реално число в интервала [1.00.. .25000.00]
// •	Налични пари - реално число в интервала [0.00... 25000.00]
// След това многократно се четат по два реда:
// •	Вид действие – текст с възможности "spend" и "save".
// •	Сумата, която ще спести/похарчи - реално число в интервала [0.01… 25000.00]
// Изход
// Функцията трябва да приключи при следните случаи:
// •	Ако 5 последователни дни Джеси само харчи, на конзолата да се изпише:
// o	"You can't save the money."
// o	"{Общ брой изминали дни}"
// •	Ако Джеси събере парите за почивката на конзолата се изписва:
// o	"You saved the money for {общ брой изминали дни} days."


function vacation(input) {
    let index = 0
    let sumNeededForVacation = Number(input[index]);
    index++;
    let moneyOnHand = Number(input[index]);
    index++;
    let counter = 0;
    let daysCounter = 0;
   
    while (moneyOnHand < sumNeededForVacation) {
        let transaction = input[index];
        index++;
        let workingCapital = Number(input[index]);
        index++;
        daysCounter++;

        if (transaction == "save") {
            counter = 0;
            moneyOnHand += workingCapital;

        } else if (transaction == "spend") {
            counter++;
            moneyOnHand -= workingCapital;
        }
            if (moneyOnHand < 0) {
                moneyOnHand = 0;
            }

            if (counter == 5) {
                break;
            }

       
    } if (counter == 5) {
        console.log("You can't save the money.");
        console.log(`${daysCounter}`);
    } else {
        console.log(`You saved the money for ${daysCounter} days.`);
    }

}




vacation
(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])



















