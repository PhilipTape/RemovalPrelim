const readline = require('readline');
const utils = require('./utils');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your grade: ',function (answer)  {
  var grade = parseInt(answer);
  var grade = (answer);

  utils.processTheGrade(grade);
  rl.close();
});
