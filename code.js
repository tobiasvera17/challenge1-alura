const text = document.querySelector(".text-input")
const encryptButton = document.querySelector(".text-buttons-encrypt")
const decryptButton = document.querySelector(".text-buttons-decrypt")

const encrypt = () => {
    console.log(text.value)
    let encrypted_text="";
    const text_to_encrypt = text.value.split("")
    console.log(text_to_encrypt)
    text_to_encrypt.map((item, index) => {
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

        return encrypted_text
    })

}

encryptButton.addEventListener('click', ()=> {
    encrypt()

})