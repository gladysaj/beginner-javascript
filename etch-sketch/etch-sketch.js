// Select the elements on the page: canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// Set up canvas for drawing
const width = canvas.width;
const height = canvas.height;
// const {height, width } = canvas; // use destructuring 
console.log(width, height);

// Create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

// add color to the snake
let hue = 0;
// ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
// ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;

// this will start the drawing setting a point on the canvas
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write the draw function 
function draw({ key }) {
  // increment the hue
  hue += 5;
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  // start the path 
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move our x and y values depending of what the user did
  //  x -= MOVE_AMOUNT;
  //  y -= MOVE_AMOUNT;
  switch (key) {
    case 'ArrowUp': 
      y -= MOVE_AMOUNT;
      break;
      case 'ArrowDown': 
      y += MOVE_AMOUNT;
      break;
      case 'ArrowLeft': 
      x -= MOVE_AMOUNT;
      break;
      case 'ArrowRight': 
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }
   ctx.lineTo(x, y);
   ctx.stroke();
}

// Write a handler for the keys 
function handleKey(e) {
  if(e.key.includes('Arrow')) {
    e.preventDefault(); // in case you want to stop it works if the window is scrolled
    draw({ key: e.key });
    // console.log(e.key) // check the key 
    // console.log('handling key')
  }
}

// clear / shake function 
function clearCanvas(){
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener('animationend', function() {
    console.log('done the shake')
    canvas.classList.remove('.shake');
  }, 
  { once: true }
  ); // automatically remove its listener
}

// listen for arrow keys 
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);