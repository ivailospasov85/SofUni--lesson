// 1.	Сумиране на секунди 
// Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50). 
// а се напише функция, която получава три аргумента - секунди и пресмята сумарното им време във формат "минути:секунди". 
// Секундите да се изведат с водеща нула (2  "02", 7  "07", 35  "35"). 


function sumSeconds(input){
    secundOne=Number(input[0]);
    secundTwo=Number(input[1]);
    secundThird=Number(input[2]);
    allsecundToMinets=(secundOne+secundTwo+secundThird) ;
    allminets = Math.floor(allsecundToMinets /60); 
    allsecunds= allsecundToMinets % 60;
   if (allsecunds<10){ 
    console.log(`${allminets}:0${allsecunds}`);
}else {
    console.log(`${allminets}:${allsecunds}`);
}


}

sumSeconds(["14", "12",
"10"])










