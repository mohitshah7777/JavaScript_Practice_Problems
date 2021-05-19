lowerLimit = 1;
headCount = 0;
tailCount = 0;

while(lowerLimit >= 1 ){
    let randomNumber = Math.round(Math.random() * 10) % 2;
    if(randomNumber == 1){
        console.log('Heads');
        headCount++;
    }
    else{
        console.log('Tails');
        tailCount++;
    }

    if(headCount == 11 || tailCount == 11){
        break;
    }
    lowerLimit++;
}

console.log('Heads came '+headCount+' times and Tails came '+tailCount+' times');