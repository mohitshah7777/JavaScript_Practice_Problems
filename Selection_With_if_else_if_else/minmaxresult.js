const prompt = require('prompt-sync')();
let firstNumber = prompt('Enter first number  = ');
let secondNumber = prompt('Enter second number  = ');
let thirdNumber = prompt('Enter third number  = ');

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);
thirdNumber = Number(thirdNumber);

result1 = Number(firstNumber + secondNumber * thirdNumber);
result2 = Number(firstNumber % secondNumber + thirdNumber);
result3 = Number(thirdNumber + firstNumber / secondNumber);
result4 = Number(firstNumber * secondNumber + thirdNumber);
 
console.log('a+b*c = '+result1);
console.log('a%b+c = '+result2);
console.log('c+a/b = '+result3);
console.log('a*b+c = '+result4);

if(result1 > result2 && result1 > result3 && result1 > result4)
    console.log('Maximum result is a+b*c = '+result1);
else if(result2 > result3 && result2 > result4)
    console.log('Maximum result is a%b+c = '+result2);
else if(result3 > result4)
    console.log('Maximum result is c+a/b = '+result3);
else
    console.log('Maximum result is a+b/c = '+result4);
