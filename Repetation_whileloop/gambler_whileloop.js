bet = 1;
wonCount = 0;
lostCount = 0;
money = 100;
broke = 0;
goal = 200;
count = 0;

while(bet >= 0){
    randomNumber = Math.round(Math.random() * 10) % 2;
    if(randomNumber == 1){
        console.log('won');
        wonCount++;
        money++;
    }
    else{
        console.log('lost');
        lostCount++;
        money--;
    }
    if(money == 200 || money == 0){
        break;
    }
    bet++;
}

console.log('Money won = '+money);
console.log('Total bets made = '+bet);
console.log('won = '+wonCount+' times');
console.log('lost = '+lostCount+' times');

