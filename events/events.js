// const butts = document.querySelector('.butts')
// const cool = document.querySelector('.cool');
// const buy = document.querySelector('.buy');

// function handleClick(){
//   console.log('they clicked me')
// }

// two arguments: the type of event and the callback function
// butts.addEventListener('click', function() {
//    console.log('it got clicked');
// })

// referencint the function 
// butts.addEventListener('click', handleClick);
// cool.addEventListener('click', handleClick);

// butts.removeEventListener('click', handleClick);

// Listen to multiple items 

// function handleBuyButton(buyButton){
//   console.log('binding the buy button');
//   buyButton.addEventListener('click', buyItem)
// }

// function buyItem(){
//   console.log('buy');
// }

// buyButtons.forEach(handleBuyButton);

// buyButtons.addEventListener('click',buyItem);

// arrow
// buyButtons.forEach(button => {
//   button.addEventListener('click', ()=> {
//     console.log('you clicked it')
//   })
// });

// const buyButtons = document.querySelectorAll('.buy');

// function handleBuyButtonClick(event) {
// const button = event.target;
// console.log('You are buying it');
// console.log(parseFloat(event.target.dataset.price));
// console.log(event.target);
// console.log(event.currentTarget);
// console.log(event.target === currentTarget);
// };

// Stop this event from bubbling up
// event.stopPropagation();

// buyButtons.forEach(function(buyButton) {
//   buyButton.addEventListener('click', handleBuyButtonClick)
// });

// window.addEventListener('click', function(){
//   console.log('you clicked the window');
//   console.log(event.type); // type is click
//   console.log(event.bubbles); // to check if it will bubble up
// }, { capture: true });

// const photo = document.querySelector('.photo');

// photo.addEventListener('mouseenter', function(e) {
//   console.log(e.currentTarget);
//   console.count(e.currentTarget);
// })