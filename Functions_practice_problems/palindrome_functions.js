const prompt = require('prompt-sync')();

function palindrome(input){    
    var reverse = 0;
    var remainder;
    const storedValue = input;

    while(input > 0){
        remainder = input % 10;
        reverse = reverse * 10 + remainder;
        input = parseInt(input/10); 
    }
    if(reverse == storedValue){
        return 0;
    }
    else{
        return 1;
    }
}

var firstNumber = prompt('Enter first number = ');
var secondNumber = prompt('Enter second number = ');
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

var result1 = parseInt(palindrome(firstNumber));
var result2 = parseInt(palindrome(secondNumber));

if(result1 == 0 && result2 == 0){
    console.log('Both numbers are palindrome');
}
else if(result1 == 1 && result2 == 0){
    console.log('Second Number is palindrome but First Number is not palindrome');
}
else if(result1 == 0){
    console.log('First Number is palindrome but Second Number is not palindrome');
}
else{
    console.log('Neither numbers are palindrome');
}