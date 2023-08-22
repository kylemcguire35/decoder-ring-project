// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  //creating an alphabet and code
  const pairs = ['11', '21', '31', '41', '51', '12', '22', '32', '42', '42', '52', '13', '23', '33', '43', '53', '14', '24', '34', '44', '54', '15', '25', '35', '45', '55'];
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function polybius(input, encode = true) {
    // your solution code here
    const phrase = input.toLowerCase();  
    let phraseArray = [];
    let codedPhrase = '';

    if (encode) {
      //create array from string
      for (let i = 0; i < phrase.length; i++) {
        phraseArray.push(phrase[i]);
      }

      phraseArray.forEach((letter) => {
        //check if the value is a letter in the alphabet
        if (alphabet.includes(letter)) {

          //find the index of the letter
          let index = alphabet.indexOf(letter);

          //add the corresponding pair to the phrase
          codedPhrase += pairs[index];
        } else {
          //if not a letter in the alphabet, add to the phrase;
          codedPhrase += letter;
        }
      })
    } else {
      //error handling, numbers must come in pairs
      let noSpaces = input.split(' ').join('');
      if (noSpaces.length % 2 !== 0) return false;

      //create array from string
      for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === ' ') {
          phraseArray.push(' ');
        } else {
          phraseArray.push(phrase[i] + phrase[i+1]);
          i++;
        }  
      }

      phraseArray.forEach((pair) => {
        //check if the value is a pair in the array
        if (pairs.includes(pair)) {

          //find the index of the letter
          let index = pairs.indexOf(pair);

          //create message from the pairs
          if (pair === '42') {
            codedPhrase += '(i/j)';
          } else {
            codedPhrase += alphabet[index];
          }

        } else {
          //if not a letter in the alphabet, add to the phrase;
          codedPhrase += pair;
        }
      })
    }
    return codedPhrase;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };