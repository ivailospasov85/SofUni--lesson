


function passwordGuess(input){
    let passwordGuess= (input[0])
    let phrase = "s3cr3t!P@ssw0rd"
    if (phrase === passwordGuess ){
        console.log('Welcome')
    }else {
        console.log("Wrong password!")
    }
}

passwordGuess(["s3cr3t!p@ss"])