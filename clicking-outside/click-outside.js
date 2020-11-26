const cardButtons = document.querySelectorAll('.card button')
const modalOuter = document.querySelector('.modal-outer')
const modalInner = document.querySelector('.modal-inner')

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  console.log(card);
  // grab the image src
  const imgSrc = card.querySelector('img').src;
  console.log(imgSrc);
  const desc = card.dataset.description;
  console.log(desc);
  const name = card.querySelector('h2').textContent;
  // populate the modal with the new info 
  modalInner.innerHTML = `<img width:"600" height: "600" src="${imgSrc.replace('200', '400')}" alt="${name}"/>
  <p>${desc}</p>
  `;
  // show the new modal 
  modal.Outer.classList.add('open');
}


cardButtons.forEach(button => 
  button.addEventListener('click', 
  handleCardButtonClick)
);

function closeModal(){
  modalOuter.classList.remove('open');
};

modalOuter.addEventListener('click', function(event){
  const isOutside = !event.target.closest('.modal-inner');
  console.log(isOutside);
  if (isOutside) {
    // modalOuter.classList.remove('open'); replace with closeModal above
    closeModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
})
