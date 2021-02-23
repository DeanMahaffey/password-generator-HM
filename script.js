//DOM Elements
var passwordEl = document.getElementById('password');
var lengthEl = document.getElementById('inputNumber');
var uppercaseEl = document.getElementById('includeUppercase');
var lowercaseEl = document.getElementById('includeLowercase');
var numberEl = document.getElementById('includeNumbers');
var symbolsEl = document.getElementById('includeSymbols');
var generateButtonEl = document.getElementById('generate');

//Character Selector
var randomCharacter =  {
	letter: function() {
    return String.fromCharCode(getRandomNumber(26) + 97)
  },
	lower: function() {
  	return this.letter().toLowerCase();
	},
  upper: function() {
    return this.letter().toUpperCase();
  },
  number: function () {
  	return String.fromCharCode(getRandomNumber(10) + 48);
	},
  symbol: function() {
    return String.fromCharCode(getRandomNumber(15) + 33);
  }
}

function getRandomNumber(upperBound) {
  return Math.floor(Math.random() * upperBound)
}

//Generate password
function generatePassword(data) {
  console.log('generatePassword: ', data);
  
  let availableMethods = [],
  		password = '';
  
	if (data.includeLower) {
  	availableMethods.push('lower');
  }
  
  	if (data.includeUpper) {
  	availableMethods.push('upper');
  }

  if (data.includeNumber) {
  	availableMethods.push('number');
  }
  
  if (data.includeSymbol) {
  	availableMethods.push('symbol');
  }
  
  if (availableMethods.length === 0) {
  	password = 'Unable to generate password without a selection';
  } else {
  
  	for (let i = 0; i < data.length; i++) {
			let methodIdx = getRandomNumber(availableMethods.length),
      		method = availableMethods[methodIdx],
          char = randomCharacter[method]();
      
      console.log('Getting a [' + method + ']: ' + char);
      
      password += char;
    }
  }

	return password;
}

//generate password eventListener
generateButtonEl.addEventListener('click', () => {
  passwordEl.value = generatePassword({
    length: parseInt(lengthEl.value, 10),
    includeLower: lowercaseEl.checked,
    includeUpper: uppercaseEl.checked,
    includeNumber: numberEl.checked,
    includeSymbol: symbolsEl.checked
  });
});