const item = document.querySelectorAll('.item');
// Return all the html 
// console.log(item.innerHTML);

const width = 400;
const src = `https://picsum.photos/${width}`;
// XSS
const desc = `Cutieeee <img onload="alert('HACKED')" src="https://picsum.photos/50"/>`;
const myHTML = `
<div class='wrapper'>
<h2>${desc}</h2>
<img src="${src}" alt="${desc}"/>
</div>`;

//  item.innerHTML = myHTML;
// console.log(typeof myHTML);

// item.innerHTML = `
//   <div>
//     <h1>Hey how are u?</h1>
//   </div>
// `;
// console.log(item.innerHTML);

// TURN STRING INTO DOM ELEMENT
const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment.querySelector('img'));
console.log(myFragment);

document.body.appendChild(myFragment);