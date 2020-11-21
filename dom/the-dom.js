// in case you added the script on the head in the html 
// document.addEventListener('DOMContentLoaded', init)

// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div');
// const items = document.querySelectorAll('.item');
// const imgs = document.querySelectorAll('.item img');
// // this will return a node list on the console
// console.log(p);
// console.log(divs);
// console.log(items);
// console.log(imgs);


// const heading = document.querySelectorAll('h2');
// // display properties of the h2
// console.dir(heading);
// // display the value or input of the h2 - textContent is also used to set a value
// console.log(heading.textContent);
// // the same function as textContent but this one doesn't display for example the styling
// console.log(heading.innerText);
// // values inside the html 
// console.log(heading.innerHTML);
// // values including the html tags
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent)

// // pizzaList.textContent = `${pizzaList.textContent} pizza-emoji`; 
// pizzaList.insertAdjacentText('beforeend', 'pizza-emoji');

// CLASSES

const pic = document.querySelector(.nice);
// to be able to add or remove clases from the html
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.add('round');
pic.classList.toggle('round'); // this will add or remove it depends which value is there
pic.classList.contains('round'); // return boolean
console.log(pic).classList; // this will return a DOMtokenlist

function toggleRound(){
  pic.classList.toggle('round');
};

pic.addEventListener('click', toggleRound);
