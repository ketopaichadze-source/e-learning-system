
import { modulesData,searchCourses } from "./data.js"
import {genetarateFilter,renderCourses,renderLearningSection,create} from "./function.js"





console.log(modulesData)
console.log(window.location)





if (window.location.pathname.includes("register")) {
    console.log("register page")


    const registerForm = document.querySelector("#registerForm")
    const emailInput = registerForm.querySelector("#email")
    const userInput = registerForm.querySelector("#user")
    const passwordInput = registerForm.querySelector("#password")


    registerForm.addEventListener("submit", (event) => {
        event.preventDefault()
        if (userInput.value.length <= 3) {
            console.log("user name lenght is too short")
            return

        }
        const user = {
            name: userInput.value,
            email: emailInput.value,
            pw: passwordInput.value

        }
        console.log(user)

        localStorage.setItem("user", JSON.stringify(user))
        alert("user saved into local storage")
    })

}

else if(window.location.pathname.includes("calendar")){
    console.log("calendar page")
    const modulesWrapper= document.querySelector("ul.module-list")
    modulesData.forEach((module,moduleIndex)=>{
    const lessonColors = ["#ffebee4b", "#e8f5e9", "#e3f2fd", "#fff3e0"]
    const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
<path d="M21.1719 0.0390625C19.0234 0.15625 14.7656 0.585938 12.1484 2.1875C11.9531 2.30469 11.8359 2.5 11.8359 2.69531V16.9141C11.8359 17.3828 12.3438 17.6562 12.7734 17.4609C15.4688 16.0938 19.375 15.7031 21.2891 15.625C21.9531 15.5859 22.4609 15.0391 22.4609 14.4141V1.21094C22.5 0.546875 21.875 0 21.1719 0.0390625ZM10.3125 2.1875C7.69531 0.585938 3.4375 0.15625 1.28906 0.0390625C0.585938 0 0 0.546875 0 1.21094V14.4141C0 15.0391 0.507812 15.5859 1.17188 15.625C3.08594 15.7031 6.99219 16.0938 9.6875 17.4609C10.1172 17.6562 10.625 17.3828 10.625 16.9141V2.69531C10.625 2.5 10.5078 2.30469 10.3125 2.1875Z" fill="#252641"/>
</svg>`
    

        const li =document.createElement("li")
        const moduleTitle = document.createElement("h4")
        const duration = document.createElement("time")
        duration.textContent= "30 mins"
        li.insertAdjacentHTML("afterbegin",svgIcon)
        li.append(moduleTitle,duration)

        moduleTitle.textContent = module.moduleTitle
        li.style.backgroundColor = lessonColors[moduleIndex % lessonColors.length]

        li.classList.add("module-item")
      


        const ol = document.createElement("ol")
        ol.classList.add("lessons-wrapper")
        
       
        module.moduleLessons.forEach((lesson,lessonIndex)=>{
            const li = document.createElement("li")
            li.classList.add("lesson")


        
            li.style.backgroundColor = lessonColors[lessonIndex % lessonColors.length]

            li.textContent = lesson.lessonTitle
            ol.append(li)
            
        })


        li.append(ol)
        modulesWrapper.append(li)
        li.addEventListener("click",(e)=>{
            if (e.target ===li){
                li.classList.toggle("expanded")
                

                console.log("Item click")
            }
      
        })


    })




}


else if(window.location.pathname.includes("search")){
    console.log("search")
    const filterswrapper = document.querySelector(".filters-btn")
    const allSubjects = searchCourses.map(course => course.subject)
    const allLnguage = searchCourses.map(course=> course.language)


    const uniqueSubjects = [...new Set(allSubjects)]
    genetarateFilter(uniqueSubjects,filterswrapper,"subjects")

    const uniqueLanguages = [...new Set(allLnguage)]
    genetarateFilter(uniqueLanguages,filterswrapper,"languages")
    
    const coursesWrapper = document.querySelector(".courses-container")

    if (coursesWrapper) {
        renderCourses(searchCourses, coursesWrapper)
    }
    

    
    
    const footer = create("footer","footer","footer") 
    console.log(footer)
}




const learningWrapper = document.querySelector(".learning-section-wrapper")
if (learningWrapper) {
    renderLearningSection(learningWrapper)
}










