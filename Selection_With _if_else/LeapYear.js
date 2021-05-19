const prompt = require('prompt-sync')();
let year = prompt('Enter a check a leap year = ');
year = Number(year);
var case1 = (year % 4);
var case2 = (year % 400);
var case3 = (year % 100);

if((case1 == 0 && case3 != 0) || case2 == 0){
    console.log(year+" is a leap year");
} 
else{
    console.log(year+" is not a leap year");
}