// Global variables
// const first = 'Glad';
// let second = 'Hi';
// // The var variable is the only one that can be accesed with the window.third
// var third = 'test';

// // Everything attached to the window scope is available like methods

// const age = 100;

// // FUNCTION SCOPE just will be available inside the function 
// function go(){
//   const hair = 'brown';
// };

// console.log(age);
// console.log(hair);

// VAR IS FUNCTION SCOPED
// BLOCK SCOPE
// You cannot access cool if using const and let
// if(1 === 1){
//   var cool = true;
// };
// console.log(cool);

// function isCool(name){
//   let cool;
//    if(name === 'Gladys') {
//     cool = true;  
//   }
//   console.log(cool);
//   return cool;
// };

// Scope lookup
// const dog = 'snickers';

// function logDog(){
//   console.log(dog);
// };

// // the result will be snickers
// function go(){
//   const dog = 'sunny';
//   logDog();
// };

// go();

// function sayHi(name) {
//   function yell(){
//     console.log(name.toUpperCase());
//   }
//   yell();
// }