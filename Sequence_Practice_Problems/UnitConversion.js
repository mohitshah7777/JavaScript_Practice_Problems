console.log("a. Inch to feet");
let feet = 12;
let inch = 42;
let result = inch/feet;
console.log("1 feet = 12 Inches, then 42 Inches = "+result);

console.log("b. Rectangular Plot");
let METER_TO_FEET_VALUE = 3.28;
let lengthInMeter = 60/METER_TO_FEET_VALUE;
let breadthInMeter = 40/METER_TO_FEET_VALUE;
let areaInMeters = lengthInMeter * breadthInMeter;
console.log("60 feet x 40 feet = " +areaInMeters+ " meters"); 

console.log("c. Area of 25 such plots");
let areaOf25Plots = 25 * areaInMeters;
console.log("Area of 25 plots(60 feet x 40 feet) = " +areaOf25Plots);