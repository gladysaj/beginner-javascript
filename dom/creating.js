// At this moment all of this is just seen on the console
const myParagraph = document.createElement('p'); // add the <p> tag
myParagraph.textContent = 'I am a paragraph'; // add the content 
myParagraph.classList.add('special') // add a class to it 
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'cute img';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// Add to the document itself (needs a parameter - a child)
document.body.appendChild(myParagraph);

// Add the content on the paragraph inside the div
myDiv.appendChild(myParagraph); 
myDiv.appendChild(myImage); 
// It's better to append to the doc once and after to avoid reflow in the page 
document.body.appendChild(myDiv);

// Add something to the top
const heading = document.createElement('h1');
heading.textContent = 'Cool web page';
// if append after it will be after the other things
// myDiv.appendChild(heading);
// Solution to this is use: it takes to arguments, when and what
myDiv.insertAdjacentElement('afterbegin', heading);

// Create an ordered list
const list = document.createElement('ul');
console.log(list);

const list1 = document.createElement('li');
list1.textContent = 'First item'

const list2 = document.createElement('li');
list2.textContent = 'Second item'

const list3 = document.createElement('li');
list3.textContent = 'Third item'

list.appendChild(list1);
list.appendChild(list2);
list.appendChild(list3);
document.body.appendChild(list);

// Clone an element 
const li5 = document.createElement('li');
li5.textContent = 'Five';
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'One'
list.insertAdjacentElement('afterbegin', li1);
