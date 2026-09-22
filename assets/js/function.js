export function genetarateFilter(data,wrapper,dropdownTitle){
    
    const selectElement = document.createElement("select")
    const defaultOption = document.createElement("option")
    defaultOption.setAttribute("selected","")
    defaultOption.setAttribute("value","all")
    defaultOption.textContent = "all "+dropdownTitle

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


        const titleElement = create("h3",course.title)


        const descElement = document.createElement("p")
        descElement.textContent = course.description;

        const infoElements = document.createElement("div")
        infoElements.classList.add("course-info")
     
        infoElements.textContent = `Duration ${course.duration} month | price ${course.price}`

        const cardFooter =document.createElement("div")
        cardFooter.classList.add("flex","justify-between","align-center","footer")
    
        const teacherElement = document.createElement("div")
        teacherElement.classList.add("teacher-info")


        const teacherImg = document.createElement("img")
        teacherImg.setAttribute("src", course.teacher.pic)
        teacherImg.style.width = "30px"
        teacherImg.style.borderRadius = "20px"; 
        const teacherName = document.createElement("span");
        teacherName.textContent = ` Teacher: ${course.teacher.name}`

        teacherElement.append(teacherImg, teacherName)
        const priceWrapper = document.createElement("div")
        const oldPriceElement = document.createElement("span")
        const newPriceElement = document.createElement("span")


        const [oldPrice,newPrice] = calculatePrices(course)
   
        oldPriceElement.textContent = oldPrice
        oldPriceElement.classList.add("old")
        newPriceElement.classList.add("new")

        newPriceElement.textContent= newPrice
        priceWrapper.classList.add("flex","price-info")
        



        priceWrapper.append(oldPriceElement,newPriceElement)
        cardFooter.append(teacherElement,priceWrapper)
        cardElement.append(titleElement, descElement, infoElements,cardFooter)

    
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



export function calculatePrices(item) {
  const oldPrice = item.price;
  
  // ახალი ფასი = ძველი ფასი - (ძველი ფასი * ფასდაკლება / 100)
  const discountedPrice = oldPrice - (oldPrice * item.discount) / 100;
  
  return [oldPrice,discountedPrice]
}





 export function create (elementName,text,className){
    const element = document.createElement(elementName)
    element.textContent = text
    element.classList.add(className)

    return element
    

    

    
   
    
}

    
