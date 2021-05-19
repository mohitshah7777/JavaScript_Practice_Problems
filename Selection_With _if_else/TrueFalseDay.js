const prompt = require('prompt-sync')();

let day = prompt('Enter day ');
let month = prompt('Enter month ');
day = Number(day);
month = Number(month);
console.log("Entered date is = "+day+ " / " +month);
if(day >= 20 && month >= 3 && day <= 20 && month <= 6){
    console.log("true");
}
else{
    console.log("false");
}