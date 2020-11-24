// var fs = require('fs');
// fs.readFile('index.html', 'utf-8', function (err, data) {
//     if(err) throw err;
    
//     console.log(data);
// });
var listItemFinal = ''
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
	input: fs.createReadStream('index.html'),
	crlfDelay: Infinity
});

rl.on('line', linha => {
    let campos = linha.split('\t'); // campos delimitados por tab   
  //  console.log( ` ${campos[0]}` );
    
    let teste =  `${campos[0]}`.split('>');
   // console.log(`${teste[1]}`)
    let teste2 = `${teste[1]}`.split('<');
   // console.log(`${teste2[0]}`) 
    //console.log(teste2)
    //console.log(`${teste2[0]}`.replace('.','').replace('.','').replace('.',''))

    for(var i = 0; i < teste2.length; i++) {
        var input = teste2[i];
        if(teste2[i].indexOf('10.') !== -1) {
          var result = input;
          var listItem = teste2;
          listItem.textContent = result;
          console.log(`${listItem[0]}`) 
          //teste2.appendChild(listItem);
        }
      }

      for(var i = 0; i < teste2.length; i++) {
        var input = teste2[i];
        if(teste2[i].indexOf('192.') !== -1) {
          var result = input;
          listItemFinal = teste2;
          listItemFinal.textContent = result;
          console.log(`${listItemFinal[0]}`) 
          //teste2.appendChild(listItem);
          
        }
      }



});
