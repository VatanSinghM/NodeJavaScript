


function getNameFromCommandLine() {

    let process  = require("process")
    // Write you code here, name should be taken as args in process.argv
    let name = process.argv;
    let n = name.length

    return name[n-1];
}

function getNameFromEnv() {

    let process  = require("process")
    const name = process.env.name;
    return name;
    // Write your code here
}

function getNameFromReadLine() {

    let process  = require("process")
    const readline = require('readline').createInterface(
        {
            input:process.stdin,
            output:process.stdout
        }
    );
    readline.question('',name => {
        console.log(name);
        readline.close();
    });
    return
    // Write your code here
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}