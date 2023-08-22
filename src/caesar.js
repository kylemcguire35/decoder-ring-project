// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  //creating an alphabet array to reference
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function caesar(input, shift, encode = true) {
    // your solution code here
    const phrase = input.toLowerCase();
    let phraseArray = [];
    let codedPhrase = '';

    //error handling
    if (shift === 0 || shift < -25 || shift > 25 || !shift) return false;  

    //create array from string
    for (let i = 0; i < phrase.length; i++) {
      phraseArray.push(phrase[i]);
    }
    
    if (encode) {
      phraseArray.forEach((letter) => {
        //check if the value is a letter in the alphabet
        if (alphabet.includes(letter)) {

          //find the index of the letter and shift the value
          let index = alphabet.indexOf(letter);
          index += shift;

          //handle cases past the ends of the alphabet
          if (index > 25) {
            index -= 26;
          } else if (index < 0) {
            index += 26;
          }
          
          //then combine the array into the encoded string
          codedPhrase += alphabet[index];

        } else {
          //if it's not a letter in the alphabet, just add to the string
          codedPhrase += letter;
        }
      })
    } else {
      phraseArray.forEach((letter) => {
        //check if the value is a letter in the alphabet
        if (alphabet.includes(letter)) {

          //find the index of the letter and shift the value
          let index = alphabet.indexOf(letter);
          index -= shift;
          
          //handle cases past the ends of the alphabet
          if (index > 25) {
            index -= 26;
          } else if (index < 0) {
            index += 26;
          }
          
          //then combine the array into the encoded string
          codedPhrase += alphabet[index];
  
        } else {
          //if it's not a letter in the alphabet, just add to the string
          codedPhrase += letter;
        }
      })
    }
    return codedPhrase;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
