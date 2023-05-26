function numberPyramid(input) {
    let n = Number(input[0]);
    let currentNumber = 1;
    for (let row = 1; row <= n; row++) {
        let buff = '';
        for (let cols = 1; cols <= row; cols++) {
            buff += currentNumber + ' ';
            currentNumber++;
            if (currentNumber > n) {
                break;
            }
        }
        console.log(buff);
        if (currentNumber > n) {
            break;
        }
    }
    // let lastRow = '';
    // for (let i = currentNumber; i <= n; i++) {
    //     lastRow += i + ' ';
    // } console.log(lastRow.trim());
}

numberPyramid(["15"])
