
// Да се напише функция,  която получава като вида и размерите на геометрична фигура и пресмята лицето й. Фигурите са четири вида: квадрат (square), правоъгълник (rectangle), кръг (circle) и триъгълник (triangle). На първия ред на входа се чете вида на фигурата (текст със следните възможности: square, rectangle, circle или triangle). 
// •	Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
// •	Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му
// •	Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
// •	Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - дължината на страната му и дължината на височината към нея
// Резултатът да се закръгли до 3 цифри след десетичната запетая. 



function areaofFigures(input) {
    let figuares = input[0];
    let side = Number(input[1]);
    let sideB = Number(input[2]);
    if (figuares === "square") {
        sideOf = side * side;

    } else if (figuares === "rectangle") {
        sideOf = side * sideB;
    } else if (figuares === 'circle') {
        sideOf = Math.PI * Math.pow(side, 2);
    } else (
        sideOf = side * sideB / 2
    )

    console.log(sideOf.toFixed(3));


}

areaofFigures(["triangle",
    "4.5",
    "20"])


