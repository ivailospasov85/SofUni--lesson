// В една кинозала столовете са наредени в правоъгълна форма в r реда и c колони. Има три вида прожекции с билети на различни цени:
// •	Premiere – премиерна прожекция, на цена 12.00 лева.
// •	Normal – стандартна прожекция, на цена 7.50 лева.
// •	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
// Напишете функция, която приема тип прожекция (стринг), 
// брой редове и брой колони в залата (цели числа) и изчислява общите приходи от билети при пълна зала.
//  Резултатът да се отпечата във формат като в примерите по-долу, с 2 знака след десетичната точка.  
 


function cinema(input){
    let movieType=(input[0]);
    let r = Number(input[1]);
    let c = Number(input[2]);
    let income=0;

    switch(movieType){
        case 'Premiere':
            income= (r*c)*12;break;
        case 'Normal':
            income=(r*c)*7.5;break;
            case 'Discount':
                income=(r*c)*5;break;
    
    }
    console.log(`${income.toFixed(2)} leva`);
}
cinema (["Premiere",
"10",
"12"])
