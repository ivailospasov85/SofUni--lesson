// На осемнадесетия си рожден ден на Хосе взел решение, че ще се изнесе да живее на квартира. 
// Опаковал багажа си в кашони и намерил подходяща обява за апартамент под наем. 
// Той започва да пренася своя багаж на части, защото не може да пренесе целия наведнъж.
//  Има ограничено свободно пространство в новото си жилище, където може да разположи вещите, така че мястото да бъде подходящо за живеене.
// Напишете програма, която изчислява свободния обем от жилището на Хосе, който остава след като пренесе багажа си. 
// Бележка: Един кашон е с точни размери:  1m. x 1m. x 1m.
// Вход
// Потребителят въвежда следните данни на отделни редове:
// 1.	Широчина на свободното пространство - цяло число в интервала [1...1000]
// 2.	Дължина на свободното пространство - цяло число в интервала [1...1000]
// 3.	Височина на свободното пространство - цяло число в интервала [1...1000]
// 4.	На следващите редове (до получаване на команда "Done") - брой кашони, които се пренасят в квартирата - цели числа в интервала [1...10000];
// Функцията трябва да приключи прочитането на данни при команда "Done" или ако свободното място свърши.
// Изход
// Да се отпечата на конзолата един от следните редове:
// -	Ако стигнете до командата "Done" и има още свободно място:
// "{брой свободни куб. метри} Cubic meters left."
// -	Ако свободното място свърши преди да е дошла команда "Done":
// "No more free space! You need {брой недостигащи куб. метри} Cubic meters more."

function moving(input) {
    let index = 0
    let width = Number(input[index])
    index++
    let length = Number(input[index])
    index++
    let height = Number(input[index])
    index++
    let apartmentSize = width * length * height
    let cartoon = input[index]
    index++
    let numberOfCartons = 0

    while (cartoon !== "Done") {

        numberOfCartons = Number(cartoon);
        apartmentSize -= numberOfCartons;
        if (apartmentSize <= 0) {
            let neededSpice = apartmentSize
            console.log(`No more free space! You need ${Math.abs(neededSpice)} Cubic meters more.`)
            break;
          
        }
        cartoon = input[index]
        index++

    } if (cartoon == "Done") {
        let freeSpace = apartmentSize;
        console.log(`${freeSpace} Cubic meters left.`)
    }
    }

    moving
        (["10",
            "1",
            "2",
            "4",
            "6",
            "Done"])

