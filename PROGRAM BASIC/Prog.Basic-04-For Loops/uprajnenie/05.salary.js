// Шеф на компания забелязва че все повече служители прекарват  време в сайтове, които ги разсейват.  
// За да предотврати това, той въвежда изненадващи проверки на отворените табове на браузъра на служителите си. 
// Според отворения сайт в таба се налагат следните глоби:
// •	"Facebook" -> 150 лв.
// •	"Instagram" -> 100 лв.
// •	"Reddit" -> 50 лв.
// От конзолата се четат два реда:
// •	Брой отворени табове в браузъра n - цяло число в интервала [1...10]
// •	Заплата - число в интервала [500...1500]
// След това n – на брой пъти се чете име на уебсайт – текст
// Изход
// •	Ако по време на проверката заплатата стане по-малка или равна на 0 лева, на конзолата се изписва 
// "You have lost your salary." и програмата приключва. 
// •	В противен случай след проверката на конзолата се изписва остатъкът от заплатата (да се изпише като цяло число).

function salary(input) {
    let numberOfWebsiteOpen = input[0];
    let mySalary = input[1];
    let webSiteName = input[2];

    for (let i = 2; i <= numberOfWebsiteOpen +2 ; i++) {
        let webSiteName = input[i];
        if (webSiteName === "Facebook") {
            mySalary -= 150;
        } else if (webSiteName === "Instagram") {
            mySalary -= 100;
        } else if (webSiteName === "Reddit") {
            mySalary -= 50;
        }
    } if (mySalary <= 0) {
        console.log("You have lost your salary.");
        return;
    } else {
        console.log(mySalary);
    }

}

salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])







