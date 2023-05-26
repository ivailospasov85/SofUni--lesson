// 8.	Числа, които се делят на 9
// Напишете функция, която получава две числа и принтира  на конзолата, всички числа в диапазона, които се делят на 9 без остатък, както и тяхната сума. 
//  На първия ред отпечатайте сумата на числата, а на следващите редове отговарящите на условието числа.
function numberDivisibleBy9(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0;
    let buff="";
    for (let i = start; i <= end; i++) {
        if (i % 9 === 0){
            sum+=i;
            buff+= i +" \n";
        }
       
    } console.log(`The sum: ${sum}`)
    console.log(buff)
}

numberDivisibleBy9(["100", "200"])