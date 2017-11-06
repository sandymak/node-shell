var fs = require('fs');

var commands = {
  pwd: function () {
    // this is the current file we are in
    // process.stdout.write(process.argv[1] + '\n');

    process.stdout.write(process.cwd());
    // this is the current working directory!
  },
  date: function () {
    process.stdout.write(Date().toString());
  },
  random: function (val) {
    process.stderr.write('command not found: ' + val);
  },
  echo: function (val) {
    process.stdout.write(val);
  },
  ls: function () {
    fs.readdir('.', function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString());
        process.stdout.write('\n');
      });
      process.stdout.write("prompt > ");
    });
  }
};

module.exports = commands;
