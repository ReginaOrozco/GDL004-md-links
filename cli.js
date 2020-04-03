const commands = require('./readFile.js')
const path = process.argv[3];

module.exports.commands = () => {
  const options = {
      validate: false,
      stats: false,
  };

  if(process.argv.indexOf('--validate') > -1){
    options.validate = true;
  } else if (process.argv.indexOf('stats') > -1){
    options.stats = true;
  }
};
