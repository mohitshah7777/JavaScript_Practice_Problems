const prompt = require('prompt-sync')();

fraction1 = 9/5;
fraction2 = 5/9;
val = 32;

function fehrenheitFunction(input){
    degF = (input*fraction1)+val;
    console.log(input+' celcius = '+degF+ ' fehrenheit'); 
}

function celciusFunction(input){
    degC = (input-val)*fraction2;
    console.log(input+' fehrenheit = '+degC+ ' celcius');
}

console.log('Menu');
console.log('1. Celcius to Fehrenheit');
console.log('2. Fehrenheit to Celcius');

let choice = prompt('Enter your choice = ');
choice = Number(choice);

switch(choice){
    case 1:
        let celcius = prompt('Enter celcius = ');
        celcius = Number(celcius);
        if(celcius < 0 || celcius > 100){
            console.log('Celcius should be in 0 to 100 degree range');
        }
        else{
            fehrenheitFunction(celcius);
        }
        break;
    case 2:
        let fehrenheit = prompt('Enter fehrenheit = ');
        fehrenheit = Number(fehrenheit);
        if(fehrenheit < 32 || fehrenheit > 212){
            console.log('fehrenheit should be in 32 to 212 degree range');
        }
        else{
            celciusFunction(fehrenheit);
        }
        break;
    default:
        console.log('Invalid Choice');
}