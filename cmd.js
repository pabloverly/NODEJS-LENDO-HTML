var shell = require('shelljs');
 
shell.exec('ping 10.0.70.92');

if (!shell.which('git')) {
  shell.echo('Desculpe, este script requer o git.');
  shell.exit(1);
}
 
// const execSync = require('child_process').execSync;
// // import { execSync } from 'child_process';  // replace ^ if using ES modules
// try{
// const output = execSync('ping 10.70.92', { encoding: 'utf-8' });  // the default is 'buffer'
// console.log('Output was:\n', output);
// }
// catch{}