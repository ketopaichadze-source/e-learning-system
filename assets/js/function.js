export function genetarateFilter(data,wrapper){
    const selectElement = document.createElement("select")
    const defaultOption = document.createElement("option")
    defaultOption.setAttribute("selected","")
    defaultOption.setAttribute("value","all")
    defaultOption.textContent = "all courses"
    selectElement.append(defaultOption)



    data.forEach(element => {
        const optionElement = document.createElement("option")
        optionElement.setAttribute("value",element)
        optionElement.textContent = element
        selectElement.append(optionElement)


    });
    console.log(selectElement)
    wrapper.append(selectElement)
}


export function renderCourses(data, wrapper) {
    data.forEach(course => {
        const cardElement = document.createElement("div")
        cardElement.classList.add("course-card")

        const titleElement = document.createElement("h3")
        titleElement.textContent = course.title;

        const descElement = document.createElement("p")
        descElement.textContent = course.description;

        const infoElements = document.createElement("div")
        infoElements.classList.add("course-info");
     
        infoElements.textContent = `Duration ${course.duration} month | price ${course.price}`

        
        const teacherElement = document.createElement("div")
        teacherElement.classList.add("teacher-info")

        const teacherImg = document.createElement("img")
        teacherImg.setAttribute("src", course.teacher.pic)
        teacherImg.style.width = "30px"
        teacherImg.style.borderRadius = "20px"; 
        const teacherName = document.createElement("span");
        teacherName.textContent = ` მასწავლებელი: ${course.teacher.name}`

        teacherElement.append(teacherImg, teacherName)

      
        cardElement.append(titleElement, descElement, infoElements, teacherElement)

    
        wrapper.append(cardElement)
    });
}

export function renderLearningSection(wrapper) {
    const container = document.createElement("div")
    container.classList.add("learning-info-box")
    
    const titleElement = document.createElement("h3")
    
    titleElement.textContent = "Know about learning platform"

    const elementUl = document.createElement("ul")
    elementUl.classList.add("features-list")

    const features = ["Free E-book, video & consolation", "Top instructors from around world", "Top courses from your team"]
    
    features.forEach(text => {
        const elementLi = document.createElement("li")
        
        const blueDot = document.createElement("span")
        blueDot.classList.add("dot")

        const textSpan = document.createElement("span")
        textSpan.textContent = text

    
        elementLi.append(blueDot, textSpan)
        elementUl.append(elementLi)
    });

    const btnElement = document.createElement("a")
    btnElement.href = "#"
    btnElement.classList.add("btn-start")
    btnElement.textContent = "Start learning now"

    container.append(titleElement, elementUl, btnElement)
    wrapper.append(container)
}