
const paymentForm = document.querySelector("#paymentForm")
const cardNameInput = paymentForm.querySelector("#cardName")
const cardNumberInput = paymentForm.querySelector("#cardNumber")
const expDateInput = paymentForm.querySelector("#expDate")
const cvcInput = paymentForm.querySelector("#cvc")

paymentForm.addEventListener("submit",(event)=>{
    event.preventDefault()

    if(!cardNameInput.value.trim() || !cardNumberInput.value.trim() || !expDateInput.value.trim() || !cvcInput.value.trim()){
        console.log("Please fill in all fields!")
        return
    }


    if (cardNumberInput.value.length>=15){
        console.log("Card number is too short")
        return 
    }

    if (cvcInput.value.length>=3){
        console.log("CVC is too short")
        return
    }


    const paymentData = {
        name: cardNameInput.value,
        number: cardNumberInput.value,
        expiry:expDateInput.value,
        cvc: cvcInput.value

    }
    console.log(paymentData)

    localStorage.setItem("paymentInfo",JSON.stringify(paymentData))
    alert("Payment info saved into local storage")
        
})

document.addEventListener("DOMContentLoaded",()=>{
    console.log("Content loaded")


const savedDateJSON = localStorage.getItem("paymentInfo")

const paymentInfo = JSON.parse(savedDateJSON)
if(paymentInfo){
    cardNameInput.value = paymentInfo.name;
    cardNumberInput.value = paymentInfo.number;
    expDateInput.value= paymentInfo.expiry;
    cvcInput.value = paymentInfo.cvc


}
})

