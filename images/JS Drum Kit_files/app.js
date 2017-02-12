'use strict';

function sayHello(first, last){
    console.info('Hello, ' + first + ' ' + last);
}


var fName = 'Matt';
var lName = 'Eads'
sayHello(fName, lName);

function keyWasPressed(){
  console.info('You pressed a key...');
  console.log(e);
}

window.addEventListener('keydown', keyWasPressed());
