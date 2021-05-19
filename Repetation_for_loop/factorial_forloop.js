const prompt = require('prompt-sync')();
let number = prompt('Enter number to get factorial = ');
number = Number(number);

factorial = 1;
if(number == 1 || number == 0){
    console.log(number+'! = '+' 1');
}
else{
    for(i = 1; i <= number; i++){
        factorial = factorial*i;
    }
    console.log(number+"! = "+factorial);
}
