

const { readFile } = require('fs');
const { promisify } = require('util'); 
const readFileAsync = promisify(readFile)

const OPTIONS = { encoding: 'UTF-8'}

module.exports = async() =>{
    const content = await readFileAsync('./index.html', OPTIONS );

    return content;

}