const prompt = require('prompt-sync')();

function checkPrime(input){
    flag = 0;
    for(i = 2; i<input; i++){
        if(input % i == 0){
            flag = 1;
            break;
        }
    }
    if(flag == 0){
        return 'Prime Number';   
    }
    else{
        return 'Non Prime Number';
    }
}

function palindrome(input){    
    const storedValue = input;
    var reverse = 0;
    var remainder;
    while(input > 0){
        remainder = input % 10;
        reverse = reverse * 10 + remainder;
        input = parseInt(input/10); 
    }
    flag = 0;
    for(i = 2; i < reverse; i++){
        if(reverse % i == 0){
            flag = 1;
            break;
        }
    }
    if(flag == 0){
        return reverse+' and it is a prime number';
    }
    else{
        return reverse+' and it is a non prime number';
    }
}

var number = prompt('Enter number to check if it is a prime number or not = ');
number = Number(number);

var prime = checkPrime(number);
var palin = palindrome(number);

console.log(number+' = '+prime);
console.log('Palindrome = '+palin);

