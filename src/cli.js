const program = require('commander');
const pkg = require('../package.json');

program.version(pkg.version, '-v, --version');

program
  .command('init')
  .description('valet init')
  .action(() => {
    console.log('initialize..');
  });

// TODO: Put all other commands here.

program.parse(process.argv);
