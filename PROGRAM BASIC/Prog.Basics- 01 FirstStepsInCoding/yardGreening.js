function yardGreening(input) {
    let yard = Number(input[0])
    let jobBill = 7.61
    let discoundJob = 0.18
    let Price = yard * jobBill

    let discound = Price * 0.18
    let finalPrice = Price - discound
    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discound} lv.`)

}

yardGreening(['150'])