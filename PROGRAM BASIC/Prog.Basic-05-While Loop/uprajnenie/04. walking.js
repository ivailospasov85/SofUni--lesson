// Габи иска да започне здравословен начин на живот и си е поставила за цел да върви 10 000 стъпки всеки ден. 
// Някои дни обаче е много уморена от работа и ще иска да се прибере преди да постигне целта си. 
// Напишете функция, която чете от масив по колко стъпки изминава тя всеки път като излиза през деня 
// и когато постигне целта си да се изписва "Goal reached! Good job!"
//  и колко стъпки повече е извървяла "{разликата между стъпките} steps over the goal!"
// Ако иска да се прибере преди това, тя ще въведе командата "Going home" и ще въведе стъпките, 
// които е извървяла докато се прибира. След което, ако не е успяла да постигне целта си, 
// на конзолата трябва да се изпише: "{разликата между стъпките} more steps to reach goal."

function walking(input) {
    let theGoal = 10000
    let index = 0
    let distance = input[index]
    index++
    let distanceReached = 0
    let goalAccomplished = false
    let missedSteps = 0
    let sumBetween = 0
    while (distanceReached < theGoal) {


        if (distance === "Going home") {
            distance = input[index]
            index++
            distanceReached += Number(distance)
            missedSteps = theGoal - distanceReached
            if (distanceReached > theGoal) {
                missedSteps = distanceReached - theGoal
                console.log(`Goal reached! Good job! \n${missedSteps} steps over the goal!`)
                return;
            } else {
                break;
            }


        } else if (distanceReached > theGoal) {

            break;

        }

        distanceReached += Number(distance)

        if (distanceReached < 10000) {

            distance = input[index]
            index++
        }


    } if (distanceReached > 10000) {
        sumBetween = distanceReached - theGoal;
        console.log(`Goal reached! Good job! \n${sumBetween} steps over the goal!`);
    } else {
        console.log(`${missedSteps} more steps to reach goal.`)
    }

}

walking
(["1000",
"1500",
"2000",
"6500"])





