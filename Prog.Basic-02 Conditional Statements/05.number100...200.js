
// Да се напише функция, която получава цяло число и проверява дали е под 100, между 100 и 200 или над 200. Ако числото е:
// •	под 100 отпечатайте: "Less than 100"
// •	между 100 и 200 отпечатайте: "Between 100 and 200"
// •	над 200 отпечатайте: "Greater than 200"


function number100200(input) {
    let number100200 = Number(input[0]);

    if (number100200 < 100) {
        console.log("Less than 100")
    } else if (number100200 <= 200) {
        console.log("Between 100 and 200")
    } else {
        console.log("Greater than 200")
    }



}




number100200(["210"]);