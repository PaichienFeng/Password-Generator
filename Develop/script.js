// Assignment Code
const generateBtn = document.querySelector("#generate");
const textareaEl = document.getElementById('password');

// Write password to the #password input
function writePassword() {
  // ask user to enter pw length
  const PasswordLength = Number(prompt("What is the length of the password? Must be > 8 or < 128."));

  if(isNaN(PasswordLength) || PasswordLength < 8 || PasswordLength > 128){
    return writePassword();
  }


  

  // ask if want symbols
  const isSymbols = confirm("DO you want Symbols");
  
  // ask if want lowercase
  const isLowercase = confirm("DO you want Lowercase");
  // ask if want uppercase
  const isUppercase = confirm("DO you want Uppercase");
  // ask if want number
  const isNumber = confirm("DO you want Number");

  if(!isLowercase && !isSymbols && !isUppercase && !isNumber){
    alert('Please select at least one criteria')
    return writePassword();
  }

  // generate character set before we create the pw
  let charsets = "";

  if(isSymbols){
    charsets = charsets + "!@#$%^&*()";
  }

  if (isLowercase) {
    charsets = charsets + "abcdefghijklmnopqrstuvwxyz";
  }

  if (isUppercase) {
    charsets = charsets + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (isNumber) {
    charsets = charsets + "1234567890";
  }

  // generate pw based on criteria selected


  const password = generatePassword(PasswordLength, charsets);

  // insert pw to textarea
  textareaEl.value = password;
}




function generatePassword(length, charsets){

  let password = "";

  // get random character for 'pwLength' times
  for (let x = 0; x < length; x++) {
    // get a random character based on charsets
    const randomIndex = Math.floor(Math.random() * charsets.length)

    password = password + charsets[randomIndex];

  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);