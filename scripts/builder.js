// creates the game.js file that is used by TIC-80.
const packageJSON = require('../package.json')
const fs = require('fs')

const generateGameString = function(TICString) {
  return `
// title:  ${packageJSON.name}
// author: ${packageJSON.author}
// desc:   ${packageJSON.description}
// script: js
const bundle = ${TICString}
function TIC() {
  bundle.TIC()
}
  `
};

fs.readFile("./build/bundle.min.js", "utf8", function(err, data) {
  if (err) {
    console.error(
      'There was an error reading data from bundle.js. Did you run the bundler?'
    );
    throw err;
  }
  // write the file to game.js
  fs.writeFile('game.js', generateGameString(data), (err) => {
    if (err) {
      console.error(
        'There was an error writing data to game.js.'
      );
      throw err;
    }
    console.log('The file has been saved!');
  })
});

