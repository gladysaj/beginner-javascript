const glad = document.querySelector('.glad');
console.log(glad.children); // this return the HTML collection
console.log(glad.childNodes); // returns a nodelist with all text and elements

// Element selectors 
console.log(glad.firstElementChild); 
console.log(glad.lastElementChild); 
console.log(glad.previousElementSibling); 
console.log(glad.parentElement); 

// Nodes selectors
console.log(glad.childNodes);
console.log(glad.firstChild);
console.log(glad.lastChild);
console.log(glad.previousSibling);
console.log(glad.nextSibling);
console.log(glad.parentNode);

// Remove elements
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();
console.log(p); // still exists on the console
