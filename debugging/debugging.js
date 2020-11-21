const people = [
  { name: 'Gladys', cool: true, country: 'Mexico' },
  { name: 'Scott', cool: true, country: 'France' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  // if the console is open this will pause JS from running, like a breakpoint will show the sources tab
  // debugger;
  console.log(person.name);
});

// Console Methods
// console.info('HI');
// console.error('Dumb');
// console.warn('Test');
// console.group();
// console.groupEnd();
// console.groupCollapsed();

// Callstack or stack trace
// This is to read the errors on the console

// GrabbingElements
// inspect an element on the console and then add $0 this will show you the element
// if the page has jquery you can add $$('p') to select all the elements for example within that class 

// Breakpoints

// Scope

// Network Requests
// open the console and go to Network you can see all the files needed 

// Break On Attribute
// on the console select an element then right click and select break on->attribute modifications
// this will show a paused in debugger

// Some Setup Code

// To console log one collapsable group (console.groupCollapsed)
function doALotOfStuff(){
  console.group('Doing some stuff');
  console.info('HI');
  console.error('Dumb');
  console.warn('Test');
  console.groupEnd('Doing some stuff');
}

function doctorize(name) {
  console.count('running Doctorize');
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

// Make me bigger button!
const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}