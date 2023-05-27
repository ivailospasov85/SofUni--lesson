function vacationBooks(input){
let books=Number(input[0]);
let pages=Number(input[1]);
let days=Number(input[2]);
let result= (books/pages) / days;
console.log(result);

}


vacationBooks(["432","15","4"]);
