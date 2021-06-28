// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function (input, shift, encode) {
  // you can add any code you want within this function scope

  function shiftChar(cc, shift) {
    if(cc<97 || cc>122) return cc
    let ccs = cc + shift
    if(ccs < 97) ccs +=26
    else if (ccs>122) ccs -= 26
    return ccs
  }

  function caesar(input, shift, encode = true) {
    if(!shift || shift===0 || shift<-25 || shift>25) return false
    const lcInput = input.toLowerCase()
    let shifter = shift
    if (!encode) shifter = shifter * -1
    const inputArr = []
    for(let i=0; i<input.length; i++) {
      const cc = lcInput.charCodeAt([i])
      inputArr.push(shiftChar(cc, shifter))
    }
    const shiftyBoi = String.fromCharCode(...inputArr)
    console.log(shiftyBoi) //for testing
    return shiftyBoi
  }
    
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
