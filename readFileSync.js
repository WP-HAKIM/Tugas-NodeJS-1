var fs = require('fs');
var data = fs.readFileSync('sample.txt');

console.log('Reading File Complated : '+ new Date().toISOString());
console.log('After readFileSync Complated: '+new Date().toISOString());