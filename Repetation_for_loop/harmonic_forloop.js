const prompt = require('prompt-sync')();
let term = prompt('Enter the nth term = ');
term = Number(term);

var singleLine = " ";
for(i = 1; i<term; i++){
    singleLine += '1/'+i+' + ';
}
console.log('Hbase'+term+' = ' + singleLine+'1/'+term);