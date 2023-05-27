// // Да се напише функция, която получава, изчислява и отпечатва сумата от стойностите на гласните букви според таблицата по-долу:
// буква	    a	e	i	o	u
// стойност	    1	2	3	4	5

function vowelsum(input) {
    let text = input[0];
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
        let ch = text[i];
        switch (ch) {
            case "a": sum += 1; break;
            case "e": sum += 2; break;
            case "i": sum += 3; break;
            case "o": sum += 4; break;
            case "u": sum += 5; break;
        }
    }
    console.log(sum);
}
vowelsum(["beer"])