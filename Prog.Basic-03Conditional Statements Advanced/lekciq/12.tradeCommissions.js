// Фирма дава следните комисионни на търговците си според града, в който работят и обема на продажбите:
// Град	0 ≤ s ≤ 500	500 < s ≤ 1 000	1 000 < s ≤ 10 000	s > 10 000
// Sofia	5%	7%	8%	12%
// Varna	4.5%	7.5%	10%	13%
// Plovdiv	5.5%	8%	12%	14.5%
// Напишете функция, която  получава име на град (стринг) и обем на продажби (число) и изчислява и извежда размера на търговската комисионна според горната таблица. 
// Резултатът да се изведе форматиран до 2 цифри след десетичната точка. При невалиден град или обем на продажбите (отрицателно число) да се отпечата "error". 

function tradeCommissions(input) {
    let town = (input[0]);
    let sales = (input[1]);
    let tradeCommissions = 0;
    switch (town) {
        case 'Sofia':
            if (sales >0 && sales <= 500) {
                tradeCommissions = (sales*0.05);console.log(tradeCommissions.toFixed(2));break;
            } else if (sales <= 1000) {
                tradeCommissions = (sales*0.07);console.log(tradeCommissions.toFixed(2));break;
            }
            else if (sales >0 && sales <= 10000) {
                tradeCommissions = (sales*0.08);console.log(tradeCommissions.toFixed(2));break;
            } else if (sales >0 && sales > 10000) {
                tradeCommissions = (sales*0.12);console.log(tradeCommissions.toFixed(2));break;
            } else {
                console.log('error');
                break;
            }
            
        case 'Varna':
            if (sales >0 && sales <= 500) {
                tradeCommissions = (sales*0.045);console.log(tradeCommissions.toFixed(2));break;
            } else if (sales >0 && sales <= 1000) {
                tradeCommissions = (sales*0.075);console.log(tradeCommissions.toFixed(2));break;
            }
            else if (sales >0 && sales <= 10000) {
                tradeCommissions = (sales*0.10);console.log(tradeCommissions.toFixed(2));break;
            } else if (sales >0 && sales > 10000) {
                tradeCommissions = (sales*0.13);console.log(tradeCommissions.toFixed(2));break;
            } else {
                console.log('error');break;
            }
        case 'Plovdiv':
            if (sales >0 && sales <= 500) {
                tradeCommissions = (sales*0.055);console.log(tradeCommissions.toFixed(2));break;
            } else if (sales >0 && sales <= 1000) {
                tradeCommissions = (sales*0.08);console.log(tradeCommissions.toFixed(2));break;
            }
            else if (sales >0 && sales <= 10000) {
                tradeCommissions = (sales*0.12);console.log(tradeCommissions.toFixed(2));break;
            } else if (sales >0 && sales > 10000) {
                tradeCommissions = (sales*0.145);console.log(tradeCommissions.toFixed(2));break;
            } else {
                 console.log('error');break;
            }
        
        default:console.log('error');break;
        }
}

tradeCommissions (["Kaspichan",
"-50"])












