
// Напишете функция, която получава цяло число и отпечатва ден от седмицата (на английски език), 
// в граници [1...7] или отпечатва "Error" в случай, че въведеното число е невалидно. 

// Вход	Изход
// (["1"])	Monday
// (["2"])	Tuesday
// (["3"])	Wednesday
// (["4"])	Thursday
// (["5"])	Friday
// (["6"])	Saturday
// (["7"])	Sunday
// (["-1"])	Error

function dayOfWeek(input) {
    let day = Number(input[0]);
    switch  (day){
        case 1: console.log ("Monday");break
        case 2: console.log ("Tuesday");break
        case 3 : console.log ('Wednesday');break
        case 4 : console.log ('Thursday');break
        case 5 : console.log ('Friday');break
        case 6 : console.log ('Saturday');break
    case 7 : console.log ('Sunday');break
    default :console.log ("Error");break;
    
    }
}
    dayOfWeek([8])