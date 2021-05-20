var array = [];
const prompt = require('prompt-sync')();
var length = prompt('Enter the number of elements = ');
length = Number(length);

for(i = 0; i<length; i++){
    var number = prompt('Enter elements = ');
    number = array.push(parseInt(number)); 
}

console.log(array);

flag = 0;
for(i = 0; i<array.length-2; i++){
    for(j = i+1; j<array.length-1; j++){
        for( k = j+1; k<array.length; k++){
            if((array[i]+array[j]+array[k]) == 0){
                console.log('Three elemets whose sum is equal to 0 are = ');
                console.log(array[i],array[j],array[k]);
                flag = 1;
            }
        }
    }
}

if(flag == 0){
    console.log('Elements which has a sum of 0 does not exist in the array');
}