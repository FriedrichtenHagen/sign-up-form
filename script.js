




//// constraint validation API
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
// telefon number validation
const telefon = document.getElementById("telefon");
const telefonError = document.querySelector(".telefon>.error")

telefon.addEventListener("input", (event) => {
  if(telefon.validity.valid){
    telefonError.textContent = ""
    telefonError.className = "error"
  }else{
    showTelefonError()
  }
});

function showTelefonError(){
 if(telefon.validity.patternMismatch){
    telefonError.textContent = "Please only enter digits."
  }
  else if(telefon.validity.tooShort){
    telefonError.textContent = `The number should be ${telefon.minLength} characters. You entered ${telefon.value.length} characters`
  }
  else if(telefon.validity.tooLong){
    // never true on chrome and firefox, since input length is limited to max
    telefonError.textContent = `The number should be 7 characters. You entered ${telefon.value.length} characters`
  }
  telefonError.className = "error active"
}
// password validation
// password1
const password1 = document.getElementById("password1");
const password1Error = document.querySelector(".password1>.error")

password1.addEventListener("input", (e) => {
  checkPasswordIdenticallity(e)
  if(password1.validity.valid){
    password1Error.textContent = ""
    password1Error.className = "error"
  }else{
    showPassword1Error()
  }
});
function showPassword1Error(){
  if(password1.validity.tooShort){
    password1Error.textContent = `Your password should be ${password1.minLength} characters. You entered ${password1.value.length} characters`
  }
  else if(password1.validity.tooLong){
    // never true on chrome and firefox, since input length is limited to max
    password1Error.textContent = `The number should be 7 characters. You entered ${password1.value.length} characters`
  }
  password1Error.className = "error active"
}
// password2
const password2 = document.getElementById("password2");
const password2Error = document.querySelector(".password2>.error")

password2.addEventListener("input", (e) => {
  checkPasswordIdenticallity(e)
  if(password2.validity.valid){
    password2Error.textContent = ""
    password2Error.className = "error"
  }else{
    showPassword2Error()
  }
});
function showPassword2Error(){
  if(password2.validity.tooShort){
    password2Error.textContent = `Your password should be ${password2.minLength} characters. You entered ${password2.value.length} characters`
  }
  else if(password2.validity.tooLong){
    // never true on chrome and firefox, since input length is limited to max
    password2Error.textContent = `The number should be 7 characters. You entered ${password2.value.length} characters`
  }
  password2Error.className = "error active"
}
// compare password and password confirmation
function checkPasswordIdenticallity(e){
  const p1 = document.querySelector('#password1').value
  const p2 = document.querySelector('#password2').value
  if(p1 !== p2){
      e.preventDefault()
      pwlabel1.classList.add("required") 
      pwlabel2.classList.add("required") 
  }
  if(p1 === p2){
    pwlabel1.classList.remove("required") 
    pwlabel2.classList.remove("required") 
  }
}

//form submit
const form1 = document.querySelector("form")
form1.addEventListener("submit", e => {
  checkPasswordIdenticallity(e)
  
  if(!firstName.validity.valid){
    e.preventDefault();
    showFirstNameError()
  }
  else if(!lastName.validity.valid){
    e.preventDefault();
    showLastNameError()
  }
  else if(!email.validity.valid) {
    e.preventDefault();
    showEmailError()
  }
  else if(!telefon.validity.valid) {
    e.preventDefault();
    showTelefonError()
  }
  else if(!password1.validity.valid){
    e.preventDefault()
    showPassword1Error()
  }
  else if(!password2.validity.valid){
    e.preventDefault()
    showPassword2Error()
  }
})


/*
to do: 

add email, tel, password checks
  password needs to have min
add checks to form submit


*/ 