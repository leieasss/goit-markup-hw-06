const input = document.querySelector('#validation-input');
input.addEventListener('blur' , event =>{
    const element = event.currentTarget
    
    const dataLength = Number(element.dataset.length)
    if(element.value.length >= element.dataset.length){
        element.classList.add("valid")
        element.classList.remove("invalid")
        

    } else {
        element.classList.add("invalid")
        element.classList.remove("valid")
        
    }
    }
)
