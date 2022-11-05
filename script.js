const form1 = document.querySelector("form")
const pwlabel1 = document.querySelector("#pwlabel1")
const pwlabel2 = document.querySelector("#pwlabel2")

form1.addEventListener("submit", e => {
    const p1 = document.querySelector('#password1').value
    const p2 = document.querySelector('#password2').value
    if(p1 !== p2){
        e.preventDefault()
        pwlabel1.classList.add("required") 
        pwlabel2.classList.add("required") 
    }

})


