let dieRollCountMap = new Map();
dieRollCountMap.set(1, 0);
dieRollCountMap.set(2, 0);
dieRollCountMap.set(3, 0);
dieRollCountMap.set(4, 0);
dieRollCountMap.set(5, 0);
dieRollCountMap.set(6, 0);

while (Array.from(dieRollCountMap.values()).includes(10) != true) {
    let roll = (Math.floor(Math.random() * 6) + 1);
    let value = dieRollCountMap.get(roll);
    dieRollCountMap.set(roll, value + 1);
}

console.log(dieRollCountMap);
let minRollValue = Math.min(...dieRollCountMap.values());

for (let [key, value] of dieRollCountMap) {
    if (value == 10) {
        console.log("Maximum rolled Die number :" + key);
    }
    if (value == minRollValue) {
        console.log("Minimum rolled Die number :" + key);
    }
}