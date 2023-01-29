const form1 = document.querySelector("form")
const pwlabel1 = document.querySelector("#pwlabel1")
const pwlabel2 = document.querySelector("#pwlabel2")

form1.addEventListener("submit", e => {
    checkPasswordIdenticallity()
    if (!email.validity.valid) {
      showError();
      e.preventDefault();
    }
})

function checkPasswordIdenticallity(){
  const p1 = document.querySelector('#password1').value
    const p2 = document.querySelector('#password2').value
    if(p1 !== p2){
        e.preventDefault()
        pwlabel1.classList.add("required") 
        pwlabel2.classList.add("required") 
    }
}

// constraint validation API
const email = document.getElementById("email");
const emailError = document.querySelector(".error")

email.addEventListener("input", (event) => {
  if(email.validity.valid){
    emailError.textContent = ""
    emailError.className = "error"
  }else{
    showError()
  }
});


function showError(){
  if (email.validity.typeMismatch) {
    emailError.textContent = "Please enter an email"
  } 
  else if(email.validity.valueMissing){
    emailError.textContent = "You need to enter an email address!"
  }
  else if(email.validity.tooShort){
    emailError.textContent = `Email should be at least ${email.minLength} characters. You entered ${email.value.length} characters`
  }
  emailError.className = "error active"
}

