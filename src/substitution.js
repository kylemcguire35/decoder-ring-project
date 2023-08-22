// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  //creating an alphabet array to reference
  const alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const phrase = input.toLowerCase();
    let phraseArray = [];
    let codedPhrase = '';

    //error handling
    if (!alphabet) return false;

    if (alphabet.length !== 26) return false;
    
    //check for duplicates
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          return false;
        }
      }
    }

    //create array from string
    for (let i = 0; i < phrase.length; i++) {
      phraseArray.push(phrase[i]);
    }

    if (encode) {
      phraseArray.forEach((letter) => {
        //check if the value is a letter in the alphabet
        if (alphabetArr.includes(letter)) {

          //find the index of the letter
          let index = alphabetArr.indexOf(letter);
          
          //then combine the letter into the encoded string
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

          //find the index of the letter
          let index = alphabet.indexOf(letter);
          
          //then combine the letter into the encoded string
          codedPhrase += alphabetArr[index];

        } else {
          //if it's not a letter in the alphabet, just add to the string
          codedPhrase += letter;
        }
      })
    }
    return codedPhrase;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
