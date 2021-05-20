var array = [];

for(i = 0; i<100; i++){
    number = i % 10;
    repeatedNumber = number * 10 + number;
    storedValue = repeatedNumber % 10

    if(i == repeatedNumber && storedValue != 0){
        temp = repeatedNumber;
        array.push(temp);
    }
}

console.log('Repeated numbers in array = ['+array+']');