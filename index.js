const clipboard = new ClipboardJS('.copy');
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
const lowercaseInput = document.getElementById("lowercase");
const uppercaseInput = document.getElementById("uppercase");
const punctuationInput = document.getElementById("punctuation");
const numbersInput = document.getElementById("numbers");
const lengthInput = document.getElementById("length");
const passwordField = document.getElementById("password-here");
const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");
let plength, userPassword, passwordCharSet;

function generate() {
  userPassword = "";
  passwordCharSet = "";
  if (lowercaseInput.checked) {
    passwordCharSet += lowercase;
  }
  if (uppercaseInput.checked) {
    passwordCharSet += uppercase;
  }
  if (punctuationInput.checked) {
    passwordCharSet += punctuation;
  }
  if (numbersInput.checked) {
    passwordCharSet += numbers;
  }
  plength = Number(lengthInput.value);

  for (let i = 0; i < plength; i++) {
    userPassword += passwordCharSet.charAt(
      Math.floor(Math.random() * passwordCharSet.length)
    );
  }
  if (userPassword == "") {
    let alertbox = document.getElementById('alert');
    alertbox.innerHTML = "Please select an option before generating";
    alertbox.classList.add('fail');
    setTimeout(function() { 
      alertbox.classList.remove('fail');
    }, 3000);
  } else {
    passwordField.innerHTML = userPassword;
  }
  copyButton.setAttribute("data-clipboard-text", userPassword);
}
generateButton.addEventListener("click", generate);

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    let alertbox = document.getElementById('alert');
    alertbox.innerHTML = "Copied!";
    alertbox.classList.add('success');
    setTimeout(function() { 
      alertbox.classList.remove('success');
    }, 3000);
    
    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
    let alertbox = document.getElementById('alert');
    alertbox.innerHTML = "Try select the text to copy";
    alertbox.classList.add('fail');
    setTimeout(function() { 
      alertbox.classList.remove('fail');
    }, 3000);
});
