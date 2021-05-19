const prompt = require('prompt-sync')();
let number = prompt('Enter number to get prime factors = ');
number = Number(number);

if(number ==1){
    console.log('Prime factors of 1 = 1');
}
else{
    var singleLine = " ";
    flag = 0;
    for(i = 2; i <= number; i++ ){
        if(number % i == 0){
            factor = i;
            for( j = 2; j <= factor/2; j++ ){
                if(factor % j == 0){
                    flag = 1;
                    break;
                }
            }
            if(flag == 0){
                singleLine += factor +' ';
            }
        }
    }
    console.log('Prime factors of '+number+ ' are ='+singleLine);
}