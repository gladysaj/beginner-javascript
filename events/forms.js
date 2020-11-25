const wes = document.querySelector('.wes');

wes.addEventListener('click', function(e) {
  e.preventDefault(); // will stop the functionality
  // console.log(e);
  // console.log('You clicked it');
  const shouldChangePage = confirm('This website might be malicious');
  if(shouldChangePage) {
    window.location = e.currentTarget.href;
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
  
 
  const name = event.currentTarget.name.value;
   if(name.includes('chad')){
    alert('sorry ');
    event.preventDefault(); 
  }
   console.log(event.currentTarget.email.value);
});

function logEvent(event){
  console.log('event.type')
  console.log('event.currentTarget.value')
}

signupForm.addEventListener('keyup', logEvent)
signupForm.addEventListener('keydown', logEvent)
signupForm.addEventListener('focus', logEvent)
signupForm.addEventListener('blur', logEvent)