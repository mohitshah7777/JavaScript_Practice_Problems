const prompt = require('prompt-sync')();
let number = prompt('Enter the value of n = ');
number = Number(number);
var i;
for(i = 1; i<=number; i++){
    power = Math.pow(2,i);
    console.log("Table of 2^"+i+ " = "+power);
}