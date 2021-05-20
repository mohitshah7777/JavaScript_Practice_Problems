var array = [];
for(i = 0; i<10; i++){
    array[i] = Math.floor(Math.random() * 1000) % 899 + 100;
}
console.log(array);

largestValue = array[0];
smallestValue = array[0];
secondLargest = 0;
secondSmallest = 0;

for(j = 1;j<array.length; j++){
    if(array[j] > largestValue){
        secondLargest =largestValue;
        largestValue = array[j];
    }
    else if(array[j] != largestValue && secondLargest == 0 || array[j] > secondLargest){
        secondLargest = array[j]
    } 

    if(array[j] < smallestValue){
        secondSmallest = smallestValue;
        smallestValue = array[j];
    }
    else if(array[j] != smallestValue && secondSmallest == 0 || array[j] < secondSmallest){
        secondSmallest = array[j];
    }
}

console.log('Second largest value is = '+secondLargest);
console.log('Second smallest value is = '+secondSmallest);
