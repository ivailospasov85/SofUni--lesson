// Катерачи от цяла България се събират на групи и набелязват следващите върхове за изкачване. Според размера на групата, катерачите ще изкачват различни върхове.
// •	Група до 5 човека – изкачват Мусала
// •	Група от 6 до 12 човека – изкачват Монблан
// •	Група от 13 до 25 човека – изкачват Килиманджаро
// •	Група от 26 до 40 човека –  изкачват К2
// •	Група от 41 или повече човека – изкачват Еверест
// Да се напише програма, която изчислява процента на катерачите изкачващи всеки връх.
// Вход
// От конзолата се четат поредица от числа, всяко на отделен ред:
// •	На първия ред – броя на групите от катерачи – цяло число в интервала [1...1000]
// •	За всяка една група на отделен ред – броя на хората в групата – цяло число в интервала [1...1000]
// Изход
// Да се отпечатат на конзолата 5 реда, всеки от които съдържа процент между 0.00% и 100.00% с точност до втората цифра след десетичната запетая.
// •	Първи ред - процентът изкачващи Мусала
// •	Втори ред – процентът изкачващи Монблан
// •	Трети ред – процентът изкачващи Килиманджаро
// •	Четвърти ред – процентът изкачващи К2
// •	Пети ред – процентът изкачващи Еверест

function trekkingMania(input) {
    let totalCountgrubs = Number(input[0]);
    // let peopleInGroup = Number(input[1]);
    let peopleMusala = 0;
    let peopleMonblan = 0;
    let peopleKilimanjaro = 0;
    let peopleK2 = 0;
    let peopleEverest = 0;
    let musala = 0
    let monblan = 0
    let Kilimanjaro = 0
    let K2 = 0
    let everest = 0

    for (let i = 1; i < input.length; i++) {
        let groupMembers = Number(input[i])
        if (groupMembers <= 5) {
            peopleMusala += groupMembers
        } else if (groupMembers <= 12) {

            peopleMonblan += groupMembers
        } else if (groupMembers <= 25) {

            peopleKilimanjaro += groupMembers
        } else if (groupMembers <= 40) {

            peopleK2 += groupMembers
        } else {

            peopleEverest += groupMembers
        }


    }   let totalCount = peopleMusala + peopleMonblan + peopleKilimanjaro + peopleK2 + peopleEverest;
        musala = peopleMusala / totalCount * 100
        monblan = peopleMonblan / totalCount * 100
        Kilimanjaro = peopleKilimanjaro / totalCount * 100
        K2 = peopleK2 / totalCount * 100
        everest = peopleEverest / totalCount * 100

    console.log((musala).toFixed(2)+'%');
    console.log((monblan).toFixed(2)+'%');
    console.log((Kilimanjaro).toFixed(2)+'%');
    console.log((K2).toFixed(2)+'%');
    console.log((everest).toFixed(2)+'%');

}

trekkingMania
(["5",
"25",
"41",
"31",
"250",
"6"])

