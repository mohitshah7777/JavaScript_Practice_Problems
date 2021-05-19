const prompt = require('prompt-sync')();

console.log('Menu');
console.log('1. Feet to Inch');
console.log('2. Inch to Feet');
console.log('3. Feet to Meter');
console.log('4. Meter to Feet');

let choice = prompt('Enter your choice = ');
choice = Number(choice);

switch(choice){
    case 1:
        let feet1 = prompt('Enter Feet to convert to Inches = ');
        feet1 = Number(feet1);
        result = Number(feet1*12);
        console.log(feet1+' Feet = '+result+' Inches');
        break;
    case 2:
        let inch1 = prompt('Enter inch to convert to feet = ');
        inch1 = Number(inch1);
        result = Number(inch1/12);
        console.log(inch1+' inch = '+result+' feet');
        break;
    case 3:
        let feet3 = prompt('Enter Feet to convert to meter = ');
        feet3 = Number(feet3);
        result = Number(feet3/3.28);
        console.log(feet3+' Feet = '+result+' meter');
        break;
    case 4:
        let meter = prompt('Enter meter to convert to feet = ');
        meter = Number(meter);
        result = Number(meter*3.28);
        console.log(meter+' meter = '+result+' feet');
        break;
    default:
        console.log('Error! Wrong Input');
        break;
}