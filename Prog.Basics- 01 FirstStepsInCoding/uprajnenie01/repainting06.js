function repainting(input){
    let nailon=Number(input[0]);
    let paint=Number(input[1]);
    let paintjob=paint+(paint*0.10) ;
    let paintthinner=Number(input[2])*5.00;
    let shopiingBag= 0.40;
    let salary=Number(input[3]);
    
    let mataterialsByQuantity=(nailon+2)*1.50+(paintjob*14.50)+paintthinner+shopiingBag;
    //console.log(mataterialsByQuantity)
    let salaryForHour= mataterialsByQuantity*30/100;
    //console.log(salaryForHour)
    let theHoleSalary= salary*salaryForHour;
    //console.log(theHoleSalary)
    let theBill = mataterialsByQuantity+theHoleSalary;
    console.log(theBill);
}

repainting(["5 ","10 ","10","1 "]);



