
// Дадено е цяло число – начален брой точки. Върху него се начисляват бонус точки по правилата, описани по-долу. 
// Да се напише функция, която пресмята бонус точките, 
// които получава числото и общия брой точки (числото + бонуса).
// •	Ако числото е до 100 включително, бонус точките са 5.
// •	Ако числото е по-голямо от 100, бонус точките са 20% от числото.
// •	Ако числото е по-голямо от 1000, бонус точките са 10% от числото.

// •	Допълнителни бонус точки (начисляват се отделно от предходните):
// o	За четно число  + 1 т.
// o	За число, което завършва на 5  + 2 т.


function bonusScore(input) {
    let number1 = Number(input[0])
    let bonusScore = 0
    let totallsum = 0

    if (number1 % 2 == 0) {
        bonusScore = 1;
        totallsum = 1;
    } else if (number1 % 10 == 5) {
        bonusScore = 2;
        totallsum = 2;
    }
    if (number1 <= 100) {
        bonusScore = (5+bonusScore);
        totallsum = number1 + bonusScore
    } else if (number1 > 1000) {
        bonusScore = bonusScore+(number1 * 0.10);
        totallsum = number1 + bonusScore;
    } else {
        bonusScore = bonusScore +(number1 * 0.20);
        totallsum = number1 + bonusScore;

    }
    console.log(bonusScore)
    console.log(totallsum)
}





bonusScore(["15875"])