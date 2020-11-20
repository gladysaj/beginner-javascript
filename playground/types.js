/* eslint-disable */
const name = 'gladys';
const lastName = "alvarez";
const wes = `bos`;
const sentence = 'she\'s so cool'; // or use ""
const sentence2 = `she's so "cool"`;

const hello = "Hello my name is" + name; // inteporlation 
const hi = `Hello, this is my ${name}`; // concatenation 

const html = ` 
<div>
<h2> Hello world. My name is ${name}</h2>
</div>
`;
document.body.innerHTML = html;

// Numbers 
const smarties = 20;
const kids = 3;
const eachKidGets = smarties / kids;
const result = Math.floor(eachKidGets);
console.log(result);

const smartiesLeft = smarties % kids; // this will be the modulus op with 2 left