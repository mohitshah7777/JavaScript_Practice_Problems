var array = [];
const prompt = require('prompt-sync')();
var number = prompt('Enter the number to get the prime factors = ');

if(number == 1){
    console.log('Prime factors of 1 = 1');
    array.push(1);
}

flag = 0;
console.log('Prime factors of '+number+' are = ');
for(i = 2; i<=number; i++){
    if(number % i == 0){
        factor = i;
        for(j = 2; j<factor/2; j++){
            if(factor % j == 0){
                flag = 1;
                break;
            }
        }
        temp = factor;
        if(flag == 0){
            console.log(factor);
            array.push(temp)
        }
    }
}

console.log('Output in array = ['+array+']');