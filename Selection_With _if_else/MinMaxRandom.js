var max = 0, min = 999;

for (count = 1; count <= 5; count++) {
    num = Math.floor(Math.random() * 1000 ) % 899 + 100;
    console.log("Number " + count + " : " + num)
    if (num > max) {
        max = num;
    }
    if (num < min) {
        min = num;
    }
}

console.log("Maximum number = "+max);
console.log("Minimum number = "+min);
