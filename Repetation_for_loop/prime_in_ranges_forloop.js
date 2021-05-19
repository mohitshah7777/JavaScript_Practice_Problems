const prompt = require('prompt-sync')();
let lowerLimit = prompt('Enter Lower limit = ');
let upperLimit = prompt('Enter Upper limit = ');
lowerLimit = Number(lowerLimit);
upperLimit = Number(upperLimit);
console.log('Prime numbers between '+lowerLimit+ " and "+upperLimit+ " are  = ");

for(i = lowerLimit+1; i <= upperLimit-1; i++){
    flag=0;
    for(j = 2; j <= i-1; j++){
        expression = i%j;
        if(expression == 0){
            flag =1;
            break;
        }
    }
    if(flag == 0){
        console.log(i);
    }
}
