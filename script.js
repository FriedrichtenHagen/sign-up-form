




// constraint validation API
// email validation
const email = document.getElementById("email");
const emailError = document.querySelector(".email>.error")

email.addEventListener("input", (event) => {
  if(email.validity.valid){
    emailError.textContent = ""
    emailError.className = "error"
  }else{
    showEmailError()
  }
});

function showEmailError(){
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
// first name validation
const firstName = document.querySelector("#firstName")
const firstNameError = document.querySelector(".firstName>.error")

firstName.addEventListener("input", (e) => {
  if(firstName.validity.valid){
    firstNameError.textContent = ""
    firstNameError.className = "error"
  }else{
    showFirstNameError()
  }
})

function showFirstNameError(){
  if(firstName.validity.tooShort){
    firstNameError.textContent = `Please enter at least 2 letters. You have entered ${firstName.value.length} letter.`
  }
  else if(firstName.validity.patternMismatch){
    firstNameError.textContent = "Please only enter letters."
  }
}
// last name validation
const lastName = document.querySelector("#lastName")
const lastNameError = document.querySelector(".lastName>.error")

lastName.addEventListener("input", (e) => {
  if(lastName.validity.valid){
    lastNameError.textContent = ""
    lastNameError.className = "error"
  }else{
    showLastNameError()
  }
})
function showLastNameError(){
  if(lastName.validity.tooShort){
    lastNameError.textContent = `Please enter at least 2 letters. You have entered ${lastName.value.length} letter.`
  }
  else if(lastName.validity.patternMismatch){
    lastNameError.textContent = "Please only enter letters."
  }
}

//form submit
const form1 = document.querySelector("form")

form1.addEventListener("submit", e => {
  checkPasswordIdenticallity(e)
  if (!email.validity.valid) {
    e.preventDefault();
    showEmailError()
    
  }
})

function checkPasswordIdenticallity(e){
  const p1 = document.querySelector('#password1').value
  const p2 = document.querySelector('#password2').value
  if(p1 !== p2){
      e.preventDefault()
      pwlabel1.classList.add("required") 
      pwlabel2.classList.add("required") 
  }
}