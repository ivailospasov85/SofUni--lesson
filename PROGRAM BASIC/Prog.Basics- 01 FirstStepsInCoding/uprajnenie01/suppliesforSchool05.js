function suppliesSchool(input){
    let pens=Number(input[0])*5.80;
    let markers=Number(input[1])*7.20;
    let cleaningMaterials=Number(input[2])*1.20;
    let discound= Number(input[3])/100;

    let mataterials = (pens)+(markers)+(cleaningMaterials);
    let bill = mataterials-(mataterials*discound);
    //let billAfterDicount= mataterials-bill
    console.log(bill);

}

suppliesSchool(["2 ","3 ","4 ","25"])