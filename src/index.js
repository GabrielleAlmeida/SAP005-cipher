import cipher from './cipher.js';

//ENCONDE
function cipherEncode(){
    const textareaEncodeValue = document.getElementById("story-encode").value.toUpperCase()
    if (textareaEncodeValue === "") {
        alert ('Preencha o campo com o texto para cifrar');
    } 
    else {   
        const keyEncodeValue = parseInt(document.getElementById("key-encode").value)
        if (!keyEncodeValue){
            alert ('Especifique o número da chave');   
        }   
        else {
            const resultCoding = cipher.encode(textareaEncodeValue, keyEncodeValue)
            
            const textareaEncodeDestinyElement = document.getElementById('story-encode-result')
            textareaEncodeDestinyElement.innerHTML = resultCoding
        }
    }
}
const startButtonEncode = document.getElementById("button-encode")
startButtonEncode.addEventListener("click",cipherEncode)

// DECODE

function cipherDecode(){
    const textareaDecodeValue = document.getElementById("story-decode").value.toUpperCase()
    if (textareaDecodeValue === "") {
        alert ('Preencha o campo com o texto Cifrado');
    } 
    else {   
        const keyDecodeValue = parseInt(document.getElementById("key-decode").value)
        if (!keyDecodeValue){
            alert ('Especifique o número da chave');   
        }   
        else {
            const resultDecoding = cipher.decode(textareaDecodeValue, keyDecodeValue)

            const textareaDecodeDestinyElement = document.getElementById('story-decode-result')
            textareaDecodeDestinyElement.innerHTML = resultDecoding
        }
    }
}
const startButtonDecode= document.getElementById("button-decode")
startButtonDecode.addEventListener("click",cipherDecode) 


