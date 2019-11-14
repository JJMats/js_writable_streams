const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

const fileStream = fs.createWriteStream('shoppingResults.txt');

const transformData = (data) => {
  fileStream.write(`They were out of: ${data}\n`);
};

myInterface.on('line', transformData);