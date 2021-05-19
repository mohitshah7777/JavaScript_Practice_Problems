const prompt = require('prompt-sync')();
let day = prompt('Enter number of day from the week= ');
day = Number(day);

if(day == 0)
    console.log('Error! Not a valid week day');
else if(day == 1)
    console.log('Monday');
else if(day == 2)
    console.log('Tuesday');
else if(day == 3)
    console.log('Wednesday');
else if(day == 4)
    console.log('Thursday');
else if(day == 5)
    console.log('Friday');
else if(day == 6)
    console.log('Saturday');
else if(day == 7)
    console.log('Sunday');
else if(day >= 8)
    console.log('Error! Not a valid week day');