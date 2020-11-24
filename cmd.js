//SCRIPT PARA USO DO SHELL 
var shell = require('shelljs');
 
shell.exec('ping 10.0.70.92');

if (!shell.which('git')) {
  shell.echo('Desculpe, este script requer o git.');
  shell.exit(1);
}
 
