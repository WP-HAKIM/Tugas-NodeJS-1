var fs = require('fs');
fs.readFile('sample.txt',

    function(err,data){
        if(err) throw err;
        console.log('Reading File Complated : '+ new Date().toISOString());

});

console.log('After readFileSync Complated: '+new Date().toISOString());