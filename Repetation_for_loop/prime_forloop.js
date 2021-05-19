const prompt = require('prompt-sync')();
let number = prompt('Enter number to check prime number = ');
number = Number(number);

flag = 0;
for(i = 2; i<=number-1; i++){
    if(number%i == 0){
        flag = 1;
        break;
    }
}
if( flag == 0 ){
    console.log('It is a prime number');
}
else{
    console.log('It is not a prime number');
}