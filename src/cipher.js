

 const alphabetReference = 26;
 const firstLetterCode = 65;


//ENCONDE
function cipherResultEncode (cipherText, offset){
  let cipher = ""
  for(let counter = 0; counter < cipherText.length; counter++){
      const charCodeLetter = cipherText.charCodeAt(counter) 
      const resultOfTheCodingFormula= ((charCodeLetter - firstLetterCode + offset) % alphabetReference ) + firstLetterCode
      cipher = cipher + String.fromCharCode(resultOfTheCodingFormula) 
  }

  return cipher       
}

//DECODE
function cipherResultDecode (text, offsetDecode){
  let cipher = ""
  for(let counter = 0; counter < text.length; counter++){
      const charCodeLetter = text.charCodeAt(counter) 
      const resultOfTheDecodingFormula = ((charCodeLetter - firstLetterCode +(alphabetReference - (offsetDecode % alphabetReference))) % alphabetReference) + firstLetterCode
      cipher = cipher + String.fromCharCode(resultOfTheDecodingFormula)
  }

  return cipher 
}

const cipher = {
  encode: cipherResultEncode,
  decode: cipherResultDecode,
};


export default cipher;