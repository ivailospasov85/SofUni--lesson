// Петя има магазин за детски играчки. Тя получава голяма поръчка, която трябва да изпълни. С парите, които ще спечели иска да отиде на екскурзия. 
// Цени на играчките:
// •	Пъзел - 2.60 лв.
// •	Говореща кукла - 3 лв.
// •	Плюшено мече - 4.10 лв.
// •	Миньон - 8.20 лв.
// •	Камионче - 2 лв.
// Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. От спечелените пари Петя трябва да даде 10% за наема на магазина. Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.
// Вход
// От конзолата се четат 6 реда:
// 1.	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
// 2.	Брой пъзели - цяло число в интервала [0… 1000]
// 3.	Брой говорещи кукли - цяло число в интервала [0 … 1000]
// 4.	Брой плюшени мечета - цяло число в интервала [0 … 1000]
// 5.	Брой миньони - цяло число в интервала [0 … 1000]
// 6.	Брой камиончета - цяло число в интервала [0 … 1000]

// •	Ако парите са достатъчни се отпечатва:
// o	"Yes! {оставащите пари} lv left."
// •	Ако парите НЕ са достатъчни се отпечатва:
// o	


function toyShop(input) {
    let excursionPrice = Number(input[0]);
    let puzzlesNumbers = Number(input[1])
    let dolsNumbers = Number(input[2])
    let tedibearsNumbers = Number(input[3])
    let miniansNumbers = Number(input[4])
    let trucksNumbers = Number(input[5])
    let rentOfTheMagasine = 0.10;
    let totalToyNumber = puzzlesNumbers + dolsNumbers + tedibearsNumbers + miniansNumbers + trucksNumbers;
    let totalPriceOfToys = (puzzlesNumbers * 2.60) + (dolsNumbers * 3) + (tedibearsNumbers * 4.10) + (miniansNumbers * 8.20) + (trucksNumbers * 2);
    // console.log(totalToyNumber)

    // console.log(totalPriceOfToys)
    if (totalToyNumber >= 50) {
        totalPriceOfToys = 0.75* totalPriceOfToys 
    }
    let totalSumAfterRent = 0.9* totalPriceOfToys ;
    if (totalSumAfterRent >= excursionPrice) {
        let totallprice = (totalSumAfterRent - excursionPrice).toFixed(2);
        console.log(`Yes! ${totallprice} lv left.`);
    } else {
        let totallPriceTwo = (excursionPrice - totalSumAfterRent).toFixed(2);
        console.log(`Not enough money! ${totallPriceTwo} lv needed.`);
    }

}

toyShop(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"])






