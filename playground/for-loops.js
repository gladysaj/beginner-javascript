const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];
const name = 'Gladys Al';

const gladys = {
  name: 'glad',
  age: 27,
  cool: 'yes'
}

// For
for (let i = 0; i <= 10; i++) {
 console.log(i)
};

for (let i = 0; i <= numbers.length; i++) {
  console.log(numbers[i])
}

// For of (sequencing promises)
for (const letter of name) {
  console.log(letter);
};

for (const number of numbers) {
  console.log(number)
}

// For in (used for looping over keys of an object)
for (const number in numbers) {
  console.log(number)
}

for (const prop in gladys) {
  console.log(prop)
}

// While Loop
let cool = true;
let i = 1;
 while (cool === true) {
  console.log('you are cool');
  i++;
  if (i > 100) {
    cool = false;
  }
};

// Do while loop
do {
// runs once
} while ()