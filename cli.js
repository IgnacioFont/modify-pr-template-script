const fs = require('fs');
const readline = require('readline');
const nodegit = require('nodegit');

const readInterface = readline.createInterface({
    input: fs.createReadStream(process.argv[2]),
});

readInterface.on('line', function(line) {
    {
        fs.mkdir(`./repos/${line}`, { recursive: true }, (err) => {
            if (err) throw err
        })
    }
    console.log(line)
});