
const eventForm = document.querySelector("#eventForm")
const eventInput = eventForm.querySelector("#event")
const startdateInput = eventForm.querySelector("#startdate")
const enddateInput = eventForm.querySelector("#enddate")
const locationInput = eventForm.querySelector("#location")
const notificationInput = eventForm.querySelector("#notification")
const emailInput = eventForm.querySelector("#email")
const descriptionInput = eventForm.querySelector("#description")

eventForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const newEvent = {
    name:eventInput.Value,
    startDate : startdateInput.value,
    endDate : enddateInput.value,
    location: locationInput.value,
    notification: notificationInput.value,
    email: emailInput.value,
    description: descriptionInput.value
        };

    console.log("Create an event")
    localStorage.setItem("savedEvent",JSON.stringify(newEvent))
})


