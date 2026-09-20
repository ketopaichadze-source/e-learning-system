

const loginForm = document.querySelector("#loginForm")
const userInput = loginForm.querySelector("#username")
const emailInput = loginForm.querySelector("#email")
const passwordInput = loginForm.querySelector("#password")



const togglePassword = loginForm.querySelector(".hide-password")
togglePassword.addEventListener("click",()=>{

    passwordInput.type=== "text" ? passwordInput.type = "password" : passwordInput.type = "text" 
    



})



document.addEventListener("DOMContentLoaded",()=>{
    console.log("contant loaded")
        
    const savedUserData = localStorage.getItem("user")
  
    const registeredUser = JSON.parse(savedUserData)
  


     if (registeredUser) {
        userInput.value = registeredUser.name
        emailInput.value = registeredUser.email
        passwordInput.value= registeredUser.pw

       
        
    }
    



})




loginForm.addEventListener("submit", (event) => {
    event.preventDefault() 


    
    const savedUserData = localStorage.getItem("user")

    if (!savedUserData) {
       alert("try agen.")
        return
    }

    
    const registeredUser = JSON.parse(savedUserData)

    const enteredEmail = emailInput.value
    const enteredUser = userInput.value
    const enteredPassword = passwordInput.value

    if (
        enteredEmail === registeredUser.email &&
        enteredUser === registeredUser.name &&
        enteredPassword === registeredUser.pw
    ) {
       alert("Login successful!")
        
  
    } else {
        alert("The information is incorrect!")
    }


})