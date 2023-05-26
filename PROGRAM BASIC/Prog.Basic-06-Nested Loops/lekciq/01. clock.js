// Напишете функция, която отпечатва часовете в денонощието от 0:0 до 23:59, 
// всеки на отделен ред. Часовете трябва да се изписват във формат "{час}:{минути}".

function clock() {

    for (let hours = 0; hours < 24; hours++) {
        for (let min = 0; min < 60; min++) {
            if (min < 10) {
                console.log(`${hours}:${min}`)
            } else {
                console.log(`${hours}:${min}`)
            }
        }


    }


}



clock()
