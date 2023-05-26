// Предприемчив българин отваря квартални магазинчета в няколко града и продава на различни цени според града:
// град / продукт	coffee	water	beer	sweets	peanuts
// Sofia	        0.50	0.80	1.20	1.45	1.60
// Plovdiv	        0.40	0.70	1.15	1.30	1.50
// Varna	        0.45	0.70	1.10	1.35	1.55
// Напишете функция, която получава аргументи: продукт (низ), град (низ) и количество (число), и пресмята и отпечатва колко струва съответното количество от избрания продукт в посочения град. 
function smallShop(input) {
    let item = (input[0]);
    let town = (input[1]);
    let quantyty = Number(input[2]);

    switch (town) {
        case "Sofia":
            switch (item){
        case 'coffee': console.log(quantyty * 0.50); break;
        case 'water': console.log(quantyty * 0.80); break
        case 'beer':  console.log(quantyty * 1.20); break
        case 'sweets': console.log(quantyty * 1.45); break
        case 'peanuts': console.log(quantyty * 1.60); break
    } }
    switch (town) {
        case"Varna":
        switch(item){
        case 'coffee': console.log(quantyty * 0.45); break
        case 'water': console.log(quantyty * 0.70); break
        case 'beer': console.log(quantyty * 1.10); break
        case 'sweets': console.log(quantyty * 1.35); break
        case 'peanuts': console.log(quantyty * 1.55); break
    }}
    switch (town) {
        case "Plovdiv":
        switch(item){
        case 'coffee': console.log(quantyty * 0.40); break;
        case 'water': console.log(quantyty * 0.70); break;
        case 'beer': console.log(quantyty * 1.15); break;
        case 'sweets': console.log(quantyty * 1.30); break;
        case "peanuts": console.log(quantyty * 1.50); break;
        }
    }
}

smallShop(["sweets",
"Sofia",
"2.23"])




