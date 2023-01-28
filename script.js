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

// constraint validation API
const email = document.getElementById("email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});


