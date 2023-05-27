// Напишете програма, която изчислява средната оценка на ученик от цялото му обучение.
//  На първия ред ще получите името на ученика, а на всеки следващ ред неговите годишни оценки.
//   Ученикът преминава в следващия клас, ако годишната му оценка е по-голяма или равна на 4.00.
//    Ако ученикът бъде скъсан повече от един път, то той бива изключен и програмата приключва, като се отпечатва името на ученика и в кой клас бива изключен.
//  При успешно завършване на 12-ти клас да се отпечата : 
// "{име на ученика} graduated. Average grade: {средната оценка от цялото обучение}"
// В случай, че ученикът е изключен от училище, да се отпечата:
// "{име на ученика} has been excluded at {класа, в който е бил изключен} grade"
// Стойността трябва да бъде форматирана до втория знак след десетичната запетая. 

function graduated(input) {
    let index = 0;
    let name = input[index];
    index++

    let repeatNumber = 0
    let averageDegree = 0
    let degree = 0
    let count = 1
    let hasExpelled = false

    while (count < 13) {
        let degree = Number(input[index])

        if (degree >= 4) {
            averageDegree += degree
            count++
            index++
            continue
        }
        else if (degree < 4) {
            repeatNumber++
            if (repeatNumber > 1) {
                hasExpelled = true
                console.log(`${name} has been excluded at ${count} grade`);
                break;
            }
        }

    } if (!hasExpelled) {
        console.log(`${name} graduated. Average grade: ${(averageDegree / 12).toFixed(2)} `);
    }
}

graduated

(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

    


