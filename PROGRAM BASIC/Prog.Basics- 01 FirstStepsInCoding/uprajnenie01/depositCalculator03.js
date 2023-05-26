function bankDeposit (input){
    let deposit = Number(input[0]);
    let depositTime = Number(input[1]);
    let anualInrestRate = Number(input[2])/100
    let result= deposit+depositTime*(deposit*anualInrestRate)/12
    console.log(result)

    }

bankDeposit(["2350","6 ","7 "]);


//сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)