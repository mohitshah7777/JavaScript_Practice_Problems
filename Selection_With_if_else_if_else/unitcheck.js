const prompt = require('prompt-sync')();
let number = prompt('Enter number to check unit place = ');
number = Number(number);

if(number > 0 && number < 10)
    console.log('Ones Place');
else if(number >= 10 && number < 100)
    console.log('Tens place');
else if(number >= 100 && number < 1000)
    console.log('Hundreds place');
else if(number >= 1000 && number < 10000)
    console.log('Thousands place');
else if(number >= 10000 && number < 100000)
    console.log('Ten Thousands place');
else if(number >= 100000)
    console.log('Lakh or above lacs place');