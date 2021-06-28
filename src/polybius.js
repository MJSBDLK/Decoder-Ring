// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const pSquare = [
    ['',  '1',   '2',   '3', '4', '5'],
    ['1', 'a',   'f',   'l', 'q', 'v'],
    ['2', 'b',   'g',   'm', 'r', 'w'],
    ['3', 'c',   'h',   'n', 's', 'x'],
    ['4', 'd', '(i/j)', 'o', 't', 'y'],
    ['5', 'e',   'k',   'p', 'u', 'z'],
  ]//6x6 2d array
  const pAlphabet = {a: '11', b: '21', c: '31', d: '41', e: '51',
                     f: '12', g: '22', h: '32', i: '42', j: '42', k: '52',
                     l: '13', m: '23', n: '33', o: '43', p: '53',
                     q: '14', r: '24', s: '34', t: '44', u: '54',
                     v: '15', w: '25', x: '35', y: '45', z: '55'}
  
  function lc(input) {
    return input.toLowerCase()
  }
  
  function encodePS(input) {
    const inputLC = lc(input)
    const encodeArr = []
    for (let i=0; i<inputLC.length; i++) {
      const char = inputLC[i]
      if (char == ' ') encodeArr.push(char)
      else encodeArr.push(pAlphabet[char])
    }
    return encodeArr.join('')
  }
  
  function decodePS(input) {
    if (input.replace(/\s/g, "").length % 2 !== 0) return false //if odd return false
    let decodeArr = []
    for (let i=0; i<input.length; i+=2)
      if(input[i] === ' ') {
        decodeArr.push(' ')
        i --
      }
      else {
        const c1 = parseInt(input[i])
        const c2 = parseInt(input[i+1])
        console.log(`${c1}, ${c1}`) //test, working correctly
        decodeArr.push(pSquare[c1][c2])
      }
    console.log(decodeArr)
    return decodeArr.join('')
  }
    
  function polybius(input, encode = true) {
    // your solution code here
    if (encode) return encodePS(input)
    if (!encode) return decodePS(input)
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };