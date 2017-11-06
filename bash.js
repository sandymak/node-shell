'use strict';
const bashCommand = require('./command');
// const chalk = require('chalk');
// const prompt = chalk.blue('\nprompt > ');
const prompt = ('\nprompt > ');

// Output a prompt
process.stdout.write(prompt);

process.stdin.on('data', function (input) {
  const cmd = input.toString().trim();
  if (cmd === 'pwd') {
    bashCommand['pwd']();
  } else if (cmd === 'date') {
    bashCommand['date']();
  } else if (cmd === 'ls') {
    bashCommand['ls']();
  } else if (cmd.split(' ')[0] === 'echo') {
    bashCommand['echo'](cmd.split(' ').slice(1).join(' '));
  } else {
    bashCommand['random'](cmd);
  }
  process.stdout.write(prompt);
});
