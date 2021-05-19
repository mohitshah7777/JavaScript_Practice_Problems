const prompt = require('prompt-sync')();
let number = prompt('Enter number to check unit place = ');
number = Number(number);

switch(number){
    case 1:
        console.log('Ones place');
        break;
    case 10:
        console.log('Tens place');
        break;
    case 100:
        console.log('Hundreds place');
        break;
    case 10000:
        console.log('Thousands place');
        break;
    case 100000:
        console.log('Ten Thousands place');
        break;
    default:
        console.log('Above limit');
        break;
}