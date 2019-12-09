const fs = require('fs');
const readline = require('readline');
const shell = require('shelljs')
const path = require('path')

const resolvedPath = path.resolve(__dirname, './tmp')
shell.mkdir(resolvedPath)

const readInterface = readline.createInterface({
    input: fs.createReadStream(process.argv[2]),
});

const writeFile = (repoName) => {
    // const repoName = cloneUrl.match(/.+?(?=.git)/g);
    // fs.createReadStream('PULL_REQUEST_TEMPLATE.md').pipe(fs.createWriteStream('holaaaa.md'));
    fs.copyFile(`../PULL_REQUEST_TEMPLATE.md`, `./${repoName}/PULL_REQUEST_TEMPLATE.md`, (err) => {
        if (err) throw err;
        console.log('el copiado salió bien');
    });
};

readInterface.on('line', function(cloneUrl) {
    const repoName = cloneUrl.match(/\/(.+)\.git/)[1];
    console.log({ repoName })
    shell.cd(resolvedPath)
    shell.exec(`git clone ${cloneUrl}`, () => writeFile(repoName));

    console.log(cloneUrl)
});