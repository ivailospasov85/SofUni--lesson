// // Да се напише функция, която получава час и минути от 24-часово денонощие и изчислява колко ще е часът след 15 минути. 
// Резултатът да се отпечата във формат часове:минути. Часовете винаги са между 0 и 23,а минутите винаги са между 0 и 59. 
// Часовете се изписват с една или две цифри. Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо. Да се напише функция, 
// която получава час и минути от 24-часово денонощие и изчислява колко ще е часът след 15 минути. Резултатът да се отпечата във формат часове:минути. 
// Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59. Часовете се изписват с една или две цифри. 
// Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо. 

function time15Minutes(input) {
    let timeHours = Number(input[0]);
    let timeMinutes = Number(input[1]);

    let totalTime = (timeHours * 60) + (timeMinutes + 15);
    let totalHaurseTime = Math.floor(totalTime / 60);
    let totalHaourseMinets = (totalTime % 60);
    if (totalHaurseTime === 24) {
        totalHaurseTime = 0
    }
    if (totalHaourseMinets < 10) {
        console.log(`${totalHaurseTime}:0${totalHaourseMinets}`);
    }
    else {
        console.log(`${totalHaurseTime}:${totalHaourseMinets}`)
    }

}






time15Minutes(["1", "46"])