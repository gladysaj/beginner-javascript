const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');
const buy = document.querySelector('.buy');
const buyButtons = document.querySelectorAll('.buy');
console.log(buyButtons);


function handleClick(){
  console.log('they clicked me')
}

// two arguments: the type of event and the callback function
// butts.addEventListener('click', function() {
//    console.log('it got clicked');
// })

// referencint the function 
butts.addEventListener('click', handleClick);
cool.addEventListener('click', handleClick);

butts.removeEventListener('click', handleClick);

// Listen to multiple items 

function handleBuyButton(buyButton){
  console.log('binding the buy button');
  buyButton.addEventListener('click', buyItem)
}

function buyItem(){
  console.log('buy');
}

buyButtons.forEach(handleBuyButton);

buyButtons.addEventListener('click',buyItem);

// arrow
buyButtons.forEach(button => {
  button.addEventListener('click', ()=> {
    console.log('you clicked it')
  })
});