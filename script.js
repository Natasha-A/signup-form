/* Query Selectors */
const firstName = document.getElementById("firstName");
const errorFirstName = document.getElementById("errfirstName");

const errorLastName = document.getElementById("errlastName");
const lastName = document.getElementById("lastName");

const email = document.getElementById("emailAddress")
const errorEmail = document.getElementById("errEmail")

const form = document.getElementById("signupForm");

const phoneNum = document.getElementById("phoneNumber")
const errPhoneNum = document.getElementById("errPhoneNumber")

const password = document.getElementById("password")
const errPassword = document.getElementById("errPassword")


const confirmPassword = document.getElementById("passwordConfirm")
const errorConfirmPW = document.getElementById("errorConfirmPW")


// Regex expression constraints
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const regexPhoneNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im


// check for firstname error 
firstName.addEventListener('input', (e) => {
  let messages = []

  if (firstName.value === '' || null) {
    firstName.style.borderColor = "#D21E3C"

    messages.push('First Name is required')
  } 

  if (messages.length > 0) {
    e.preventDefault();
    errorFirstName.innerText = messages.join(',')
  } else {
    errorFirstName.innerText = ""
    firstName.style.borderColor = "#39C071"
  }

  console.log(messages)
})

// check for lastname error 
lastName.addEventListener('input', (e) => {
  let messages = []

  if (lastName.value === '' || null) {
    lastName.style.borderColor = "#D21E3C"
    messages.push('Last Name is required')
  } 

  if (messages.length > 0) {
    e.preventDefault();
    errorLastName.innerText = messages.join(',')
  } else {
    lastName.style.borderColor = "#39C071"
    errorLastName.innerText = ""
  }
  console.log(messages)
})

// check for email address format 
email.addEventListener('input', (e) => {
  let messages = []

  if (email.value === '' || null) {
    email.style.borderColor = "#D21E3C"
    messages.push('Email is required')
  } else if (!regexEmail.test(e.target.value)) {
    messages.push('Email format is invalid')

  }

  if (messages.length > 0) {
    e.preventDefault();
    errorEmail.innerText = messages.join(',')
  } else {
    email.style.borderColor = "#39C071"
    errorEmail.innerText = ""
  }
  console.log(s)
})

// check for phone number format 
phoneNum.addEventListener('input', (e) => {
  let messages = []

  if (phoneNum.value === '' || null) {
    phoneNum.style.borderColor = "#D21E3C"
    messages.push('Phone number required')
  } else if (!regexPhoneNumber.test(e.target.value)) {
    messages.push('Phone Number format invalid')

  }

  if (messages.length > 0) {
    e.preventDefault();
    errPhoneNum.innerText = messages.join(',')
  } else {
    phoneNum.style.borderColor = "#39C071"
    errPhoneNum.innerText = ""
  }
  console.log()
})

// check for password format
password.addEventListener('input', (e) => {
  let messages = []

  if (password.value === '' || null) {
    password.style.borderColor = "#D21E3C"
    messages.push('Password is required')

  } else if (password.value.length < 7) {
    messages.push("Make your password longer")
  } else if (password.value.length > 30) {
    messages.push("Password must be under 30 characters")
    password.style.borderColor = "#D21E3C"

  } 


  if (messages.length > 0) {
    e.preventDefault();
    errPassword.innerText = messages.join(',')
  } else {
    password.style.borderColor = "#39C071"
    errPassword.innerText = ""
  }
  console.log()
})

confirmPassword.addEventListener('input', (e) => {
  let messages = []

  if (password.value) {
    if (password.value !== e.target.value) {
      confirmPassword.style.borderColor = "#D21E3C"
      messages.push("Password must be the same")
    }
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorConfirmPW.innerText = messages.join(',')
  } else {
    confirmPassword.style.borderColor = "#39C071"
    errorConfirmPW.innerText = ""
  }

})