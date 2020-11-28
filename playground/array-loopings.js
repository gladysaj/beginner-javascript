const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

    const students = [
      {
        id: '11ce',
        first_name: 'Dall',
        last_name: 'Puckring',
      },
      {
        id: '2958',
        first_name: 'Margarete',
        last_name: 'Brandi',
      },
      {
        id: '565a',
        first_name: 'Bendicty',
        last_name: 'Woodage',
      },
      {
        id: '3a16',
        first_name: 'Micki',
        last_name: 'Mattes',
      },
      {
        id: 'f396',
        first_name: 'Flory',
        last_name: 'Gladeche',
      },
      {
        id: 'de5f',
        first_name: 'Jamill',
        last_name: 'Emilien',
      },
      {
        id: '54cb',
        first_name: 'Brett',
        last_name: 'Aizikowitz',
      },
      {
        id: '9135',
        first_name: 'Lorry',
        last_name: 'Smallman',
      },
      {
        id: '978f',
        first_name: 'Gilly',
        last_name: 'Flott',
      },
    ];

    const people = [
      {
        birthday: 'April 22, 1993',
        names: {
          first: 'Keith',
          last: 'Buckley'
        }
      },
      {
        birthday: 'January 3, 1975',
        names: {
          first: 'Larry',
          last: 'Heep'
        }
      },
      {
        birthday: 'February 12, 1944',
        names: {
          first: 'Linda',
          last: 'Bermeer'
        }
      }
    ];


    const buns = ['egg', 'wonder', 'brioche'];

    const meats = {
      beyond: 10,
      beef: 5,
      pork: 7
    };

    const prices = {
      hotDog: 453,
      burger: 765,
      sausage: 634,
      corn: 234,
    };

    const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

    const feedback = [
      { comment: 'Love the burgs', rating: 4 },
      { comment: 'Horrible Service', rating: 2 },
      { comment: 'Smoothies are great, liked the burger too', rating: 5 },
      { comment: 'Ambiance needs work', rating: 3 },
      { comment: 'I DONT LIKE BURGERS', rating: 1 },
    ];

    const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

    const inventory = [
      { type: 'shirt', price: 4000 },
      { type: 'pants', price: 4532 },
      { type: 'socks', price: 234 },
      { type: 'shirt', price: 2343 },
      { type: 'pants', price: 2343 },
      { type: 'socks', price: 542 },
      { type: 'pants', price: 123 },
    ];

// looping methods
// function logTopping(topping) {
//   console.log(topping);
// }
// toppings.forEach(logTopping);

// another way
// toppings.forEach(topping =>  {
//   console.log(topping);
// });

// function logTopping(topping, index, originalArray) {
//   const nextTopping = originalArray[index + 1];
//   const prevTopping = originalArray[index - 1];
//     // console.log(topping);
  
// // log the topping
// console.log(topping);

// // log the previous topping if there is one
// prevTopping ? console.log(prevTopping) : null;  

// // log the next topping 
// // using ternary
// nextTopping ? console.log(nextTopping) : null;
// // another way
// // if (nextTopping) {
// //   console.log(nextTopping);
// // }
// // console.log(originalArray[index + 1])


// // if it is the last item in the array say goodbye
// index === originalArray.length - 1 ? console.log('goodbye') : console.log('getting the next topping');
// } 

// toppings.forEach(logTopping);


// MAP, FILTER, REDUCE

// function addArms(face) {
//   return ` hand ${face} another hand`
// };

// const toys = faces.map(addArms);
// console.log(toys);

// // adding the lastname
// function bosify(name) {
//   return `${name} Bos`;
// };

// function capitalize(word) {
//   return `${word[0].toUpperCase()}{$word.slice(1)};
// };

// const fullNames = ['glad', 'ys', 'poppy'].map(capitalize).map(bosify);
// console.log(fullNames);

// const orderTotalsWithTax = orderTotals.map(total => total * 1.13);

// Working with objects
// const cleanPeople = people.map(function(person) {
//   // timestamp
//   const birthday = new Date(person.birthday).getTime();
//   // now timestamp
//   const now = Date.now();
//   const age = Math.floor((now - birthday) / 31536000000);
//   // get their birthday
//   // figure out how old they are
//   // return their full name and bday in an object 
//   return {
//     age: age;
//     name: `${person.names.first} ${person.names.last}`;
//   }
// });
