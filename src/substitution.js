// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
    // you can add any code you want within this function scope
  
    const realAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    const ral = realAlphabet.length //you know, in case they ever change the alphabet
    
    function dupe(alphabet) {
      const dict = {}
      for(let i=0; i<alphabet.length; i++) {
        if(dict[alphabet[i]]) return false
        dict[alphabet[i]] = 1
      }
      return true
    }
    
    //rewrite and assign each character as an object key
    function verifyAlphabet(alphabet) {
      if (!alphabet) return false
      if (alphabet.length != ral) return false
      return dupe(alphabet)
  //     return true
    } // is exactly 26 characters and each letter unique
    
    function encodeDecode(input, cipher) {
      const encodeArr = []
      for(let i=0; i<input.length; i++) {
        const char = input[i]
        if(!Object.keys(cipher).includes(char)) encodeArr.push(char)
        else encodeArr.push(cipher[char])
      }
      return encodeArr.join('')
    }
    
  //   function decodeSC(input, decodeCipher) {
  //     const decodeArr = []
  //   }
    
    function substitution(input, alphabet, encode = true) {
      // your solution code here
      if(!verifyAlphabet(alphabet)) return false // is exactly 26 characters and each letter unique
      const inputLC = input.toLowerCase()
      const cipher = {encodeCipher: {}, decodeCipher: {}}
      for(let i=0; i<ral; i++) {
        cipher.encodeCipher[realAlphabet[i]] = alphabet[i]
        cipher.decodeCipher[alphabet[i]] = realAlphabet[i]
      } //generate cipher
      if (encode) return encodeDecode(inputLC, cipher.encodeCipher)
      if (!encode) return encodeDecode(inputLC, cipher.decodeCipher)
    }
  
    return {
      substitution,
    };
  })();
  
  module.exports = { substitution: substitutionModule.substitution };
  
  // Deprecated Code
  //     for (let i=0; i<ral; i++) {
  //       const alphabe = alphabet.split('') //convert the alphabet into an array
  //       const ltr = alphabe.splice(i) //splice a letter out of that sucker
  //       if(alphabe.includes(ltr[0])) return false
  //     }