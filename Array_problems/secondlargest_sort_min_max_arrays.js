var array = [];
for(i = 0; i<10; i++){
    array[i] = Math.floor(Math.random() * 1000) % 899 + 100;
}
console.log('Unsorted Array = ['+array+']');

for(i = 0; i<array.length; i++){
    for(j = 0; j<(array.length-1); j++){
        if(array[j] > array[j+1]){
            temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp; 
        }
    }
}

console.log('Sorted array = ['+array+']');
console.log('Second largest value is = '+array[8]);
console.log('Second smallest value is = '+array[1]);