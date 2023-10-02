// String
const firstName = 'Sara';

//Number
const age = 3;
const temp = 98.9;

//Boolean
const hasKids = true;

//Null
const aptNumber = null;

//undefined
let score;

//symbol
const id = Symbol('id');

// BigInt
const n = 909458948694769845n;

//Reference Types (Object Literals, strings and functions)
const numbers = [1,2,3,4,5];

const person = {
    name: 'Bala',
    //age: 30
};

function isRif(){
    return false;
}

if(isRif()){
    console.log("RIF exists")
}

// const person = 
const output = person;
console.table({value: output, type: typeof output, comment: 'none'} )