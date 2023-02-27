// Assignment code here

// I am will generate the password based on this link of character set which is ( https://net-comber.com/charset.html )

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
let generatedPassword = '';

function generateLowercase() {
  //  we have 26 letters and lower case range starts from 97(a) upto 122(z)

  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}

function generateUppercase() {
  //  we have 26 letters and upper case range starts from 65(A) upto 90(Z)

  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}

function generateRandomNumber() {
  // we have 0 upto 9 special numbers 
  // 10 in total which are 0,1,2,3,4,5,6,7,8 and 9
  // 0 is 48 and 9 is 57  

  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function generateRandomSymbol() {
  // those are the specail character symbols 
  var symbols = '!@#$%^&*(){}[]=<>/,.'
  //  I use math.floor to round down and multiply by the length of the symbols 
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  // prompt the user for the password length  // password length should be >8 and <128 characters 
  let lengthOfPassword = parseInt(prompt("Enter a length of password. between 8 and 128 ")) // I have to use parseInt() to convert the prompt value into integer value

  if (isNaN(lengthOfPassword)) {

    alert('It is not a number, so please enter a number ');

    return "please enter only numbers"
  }

  if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert(" please eneter a number greater than 8 and less than 128")
    return " please eneter a number greater than 8 and less than 128"
  }

  else {

    // prompt the user for the password criteria 
    // password can iclude lowercase, upper case, numbers and specail characters 
    // generate password based on the selected criteria
    let lowerCase = confirm("do you want to include lowercase characters?");
    let upperCase = confirm("do you want to include uppercase characters?");
    let numbers = confirm("do you want to include number characters?");
    let specailCharacters = confirm("do you want to include specail characters?");

    console.log("lowercase: ", lowerCase)

    // when a user selected at least one character input
    if (lowerCase || upperCase || numbers || specailCharacters) {

      for(let i=0; i < lengthOfPassword; i++) {
          if(lowerCase) {
            generatedPassword += generateLowercase();
          }
          if(upperCase) {
            generatedPassword += generateUppercase();
          }
          if(numbers) {
            generatedPassword += generateRandomNumber();
          }
          if(specailCharacters) {
            generatedPassword += generateRandomSymbol();
          }
      }

      let finalPassword = generatedPassword.slice(0, lengthOfPassword);

      var shuffled = finalPassword.split('').sort(function(){return 0.5-Math.random()}).join('');

      return shuffled;

    }
    else {
      alert("please choose at least one character type")
      //  at least one character input should be selected
      return "please choose at least one character type"
    }

  }

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




