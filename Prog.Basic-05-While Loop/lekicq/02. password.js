// Напишете функция, която първоначално прочита име и парола на потребителски профил. След това чете парола за вход. 
// •	при въвеждане на грешна парола: потребителя да се подкани да въведе нова парола.
// •	при въвеждане на правилна парола: отпечатваме "Welcome {username}!".

function password(input) {
    let index = 0
    let userName = input[index]
    index++
    let pass = input[index]
    index++
    let newPass = input[index]
    index++
    // let newPass = input[index]
    while (newPass !== pass) {


        newPass = input[index];
        index++

    }

    console.log(`Welcome ${userName}!`)
}

password
    (["Nakov",
        "1234",
        "Pass",
        "1324",
        "1234"])
