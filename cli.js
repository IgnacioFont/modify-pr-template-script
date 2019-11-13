const fs = require('fs');
const readline = require('readline');
const nodegit = require('nodegit');

const url = 'git@github.com:mercadolibre/fury_cx-chimera.git';

const readInterface = readline.createInterface({
    input: fs.createReadStream(process.argv[2]),
});

readInterface.on('line', function(line) {
    const path = `repos/${line}`;
    {
        const cloneRepo = async () => {
            try {
                const repo = await nodegit.Clone(url, path);
                console.log(repo)
            } catch (e) {
                console.log(e);
            }
        };
        fs.mkdir(`./repos/${line}`, { recursive: true }, (err) => {
            if (err) throw err
        })
    }

    console.log(line)
});