// Напишете функция, която чете елементите на масив, докато не получи командата "Stop".
// Примерен вход и изход

function readText(input) {
    let index = 0
    let name = input[index]
    index++

    while (name !== 'Stop') {
        console.log(name)
        name = input[index]
        index++

    }

}


readText(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])

