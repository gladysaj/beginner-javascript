// Regular function declaration
// function doctorize(firstName){
//   return `Hey Dr. ${firstName}`;
// };

// // Anonymous function
// function (firstName){
//   return `Hey Dr. ${firstName}`;
// };

// console.log(doctorize2('Wes'));

// // Function expression
// const doctorize = function(firstName){
//   return `Hey Dr. ${firstName}`;
// };

// // Hoisted: can be accesed it is outside will bring the function up before the console.log i added here
// function doctorize2(firstName){
//   return `Hey Dr. ${firstName}`;
// };

// Arrow functions 
// function inchesToCm(inches){
//   return inches * 2.54;
// };

// const inchesToCm = function(inches) => {
//   return inches * 2.54
// }

// const inchesToCm = inches => inches * 2.54;

// function add(a,b = 3){
//   const total = a +b;
//   return total;
// };

// ARROW FUNCTION
// const add = (a, b= 3) => a+b;

// Returning an object
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// };

// ARROW FUNCTION
// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0});

// IIFE - Immediately Invoked Function Expression (you can add () so the function can run)
// (function(age){
//   console.log('Running the IIFE function');
//   return `You are cool and your age is ${age}`;
// })(26);

// Methods (functions that live inside an object) (this. property can be used in the first one)
// const gladys = {
//   name: 'Gladys',
//   // Method created 
//   sayHi: function(){
//     console.log('Hey Gladys');
//     return 'Hey Glad';
//   },
//   // Short hand method created 
//   yellHi(){
//     console.log('Heyyyyy g');
//   },
//   // Arrow function
//   wisperHi: () => {
// console.log('hi all');
//   }
// };


// // Callback functions 
// // Click callback
// const button = document.querySelector('.clickMe');


// // Can be called outside
// function handleClick() {
//   gladys.yellHi();
// }
// button.addEventListener('click', handleClick);


// // another way to do it is adding the anonymous function directly
// button.addEventListener('click', function() {
//   console.log('Nice click!');
// });

// // Timer callback - Takes two parameters, a function and a duration in miliseconds
// setTimeout(gladys.yellHi, 1000);
// // another way to do it adding the anonymous function
// setTimeout(function() {
//   console.log('DONE')
// }, 2000);

// //Another way to do it with an arrow function
// setTimeout(gladys.yellHi, 1000);
// setTimeout(() => {
//   console.log('DONE');
// }, 2000);