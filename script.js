//functions to generator random numbers, symbols, upper and lowercase letters

function getLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSymbols() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

var randomChar = {
  lower: getLowercase,
  upper: getUppercase,
  number: getNumbers,
  symbols: getSymbols
};

//DOM Elements
var passwordEl = document.getElementById('password');
var lengthEl = document.getElementById('inputNumber');
var uppercaseEl = document.getElementById('includeUppercase');
var lowercaseEl = document.getElementById('includeLowercase');
var numberEl = document.getElementById('includeNumbers');
var symbolsEl = document.getElementById('includeSymbols');
var generateButtonEl = document.getElementById('generate');

//generate password eventListener
generateButtonEl.addEventListener('click', () => {
  var lengthInput = parseFloat(lengthEl.value);
  var lowerChecked = lowercaseEl.checked;
  var upperChecked = uppercaseEl.checked;
  var numbersChecked = numberEl.checked;
  var symbolsChecked = symbolsEl.checked;



  passwordEl.value = generatePassword(lengthInput, lowerChecked, upperChecked, symbolsChecked, numbersChecked);


});

//Generate password
function generatePassword(lengthInput, upper, number, symbols) {
  let randomChar = getLowercase()
  if (upper) randomChar = randomChar.concat(getUppercase())
  if (number) randomChar = randomChar.concat(getNumbers())
  if (symbols) randomChar = randomChar.concat(getSymbols())

  var passwordChar = []
  for (let i = 0; i < lengthInput; i++) {
    var characterCode = randomChar[Math.floor(Math.random() * randomChar.length)]
    passwordChar.push(String.fromCharCode(characterCode))
 
    console.log(getNumbers(), getSymbols(), getUppercase(), getLowercase())

  }
  return passwordChar.join('');

}

