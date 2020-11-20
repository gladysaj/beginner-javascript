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
