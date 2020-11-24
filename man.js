
var listItemFinal = ''
var shell = require('shelljs');
 

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
	input: fs.createReadStream('Relatorio.html'),
	crlfDelay: Infinity
});

rl.on('line', linha => {
    let campos = linha.split('\t'); // campos delimitados por tab   
  //  console.log( ` ${campos[0]}` );
    
    let variavel1 =  `${campos[0]}`.split('>');
   // console.log(`${variavel1[1]}`)
    let variavel2 = `${variavel1[1]}`.split('<');
   // console.log(`${variavel2[0]}`) 


    //PEGAR 10.0
    for(var i = 0; i < variavel2.length; i++) {
        var input = variavel2[i];
        if(variavel2[i].indexOf('10.') !== -1) {
          var result = input;
          var listItem = variavel2;
          listItem.textContent = result;
          console.log(`${listItem[0]}`) 
         // shell.exec(`traceroute ${listItemFinal[0]}`);
        }
      }

    //PEGAR 192.
      for(var i = 0; i < variavel2.length; i++) {
        var input = variavel2[i];
        if(variavel2[i].indexOf('192.') !== -1) {
          var result = input;
          listItemFinal = variavel2;
          listItemFinal.textContent = result;
          console.log(`${listItemFinal[0]}`)   
         // shell.exec(`ping -a ${listItemFinal[0]}`);
               
        }
      }

      
});

