const text = document.querySelector(".text-input")
const encryptButton = document.querySelector(".text-buttons-encrypt")
const decryptButton = document.querySelector(".text-buttons-decrypt")
const result_img = document.querySelector("#result-img")
const result_text = document.querySelector(".result-text")
const result_text_cont = document.querySelector("#result-text")
const copyButton = document.querySelector("#result-text-button-copy")

const encrypt = () => {

    let encrypted_text="";
    const text_to_encrypt = text.value.split("")

    text_to_encrypt.map((item) => {
        if(item == 'e'){
            encrypted_text += "enter"        
        }
        else if(item == 'i'){
            encrypted_text += "imes"        
        }
        else if(item == 'a'){
            encrypted_text += "ai"        
        }
        else if(item == 'o'){
            encrypted_text += "ober"        
        }
        else if(item == 'u'){
            encrypted_text += "ufat"        
        }
        else {
            encrypted_text += item
        }

    })
        result_img.setAttribute("hidden", true)
        result_text.textContent = encrypted_text
        result_text_cont.removeAttribute("hidden")
}

const decrypt = () => {
    let codes = [['enter', 'e'], ['imes','i'], ['ai', 'a'], ['ober', 'o'], ['ufat', 'u']] 
    const text_to_decrypt = text.value
    let decrypted_text= text_to_decrypt;

    codes.map((item) => {
        var regex = new RegExp(item[0], "g");
        decrypted_text = decrypted_text.replace(regex, item[1])
    })
    result_img.setAttribute("hidden", true)
    result_text.textContent = decrypted_text
    result_text_cont.removeAttribute("hidden")
}

const copy = () => {

    navigator.clipboard.writeText(result_text.textContent);
} 

encryptButton.addEventListener('click', ()=> {
    encrypt()

})

decryptButton.addEventListener('click', ()=> {
    decrypt()

})

copyButton.addEventListener('click',()=>{
    copy()
})