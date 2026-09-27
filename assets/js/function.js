export function genetarateFilter(data, wrapper, dropdownTitle ) {
    

    const selectElement = document.createElement("select")
    selectElement.classList.add(dropdownTitle)

    const defaultOption = document.createElement("option")
    defaultOption.setAttribute("selected", "")
    defaultOption.setAttribute("value", "all")
    defaultOption.textContent = "all " + dropdownTitle

    selectElement.append(defaultOption)



    data.forEach(element => {
        const optionElement = document.createElement("option")
        optionElement.setAttribute("value", element)
        optionElement.textContent = element
        selectElement.append(optionElement)


    });
    console.log(selectElement)
    wrapper.append(selectElement)
}







export function renderCourses(data, wrapper) {
    wrapper.innerHTML  = ""
    data.forEach(course => {

        const cardElement = document.createElement("div")
        cardElement.classList.add("course-card")

        const titleElement = create("h3", course.title)

        const descElement = create("p", course.description)


        const infoElements = create("div", `Duration ${course.duration} month | price ${course.price}`, "course-info")

        const cardFooter = document.createElement("div")
        cardFooter.classList.add("flex", "justify-between", "align-center", "footer")

        const teacherElement = create("div", "teacher-info")


        const teacherImg = document.createElement("img")
        teacherImg.setAttribute("src", course.teacher.pic)
        teacherImg.style.width = "30px"
        teacherImg.style.borderRadius = "20px";

        const teacherName = create("span", ` Teacher: ${course.teacher.name}`)

        teacherElement.append(teacherImg, teacherName)
        const priceWrapper = document.createElement("div")
        const oldPriceElement = document.createElement("span")
        const newPriceElement = document.createElement("span")


        const [oldPrice, newPrice] = calculatePrices(course)

        oldPriceElement.textContent = oldPrice
        oldPriceElement.classList.add("old")
        newPriceElement.classList.add("new")

        newPriceElement.textContent = newPrice
        priceWrapper.classList.add("flex", "price-info")




        priceWrapper.append(oldPriceElement, newPriceElement)
        cardFooter.append(teacherElement, priceWrapper)
        cardElement.append(titleElement, descElement, infoElements, cardFooter)


        wrapper.append(cardElement)
    });
}

export function renderLearningSection(wrapper) {
    const container = document.createElement("div")
    container.classList.add("learning-info-box")



    const titleElement = create("h3", "Know about learning platform")

    const elementUl = document.createElement("ul")
    elementUl.classList.add("features-list")


    const features = ["Free E-book, video & consolation", "Top instructors from around world", "Top courses from your team"]

    features.forEach(text => {
        const elementLi = document.createElement("li")


        const blueDot = create("span", "", "dot")


        const textSpan = create("span", text)


        elementLi.append(blueDot, textSpan)
        elementUl.append(elementLi)
    });

    const btnElement = create("a", "Start learning now", "btn-start")
    btnElement.href = "#"

    container.append(titleElement, elementUl, btnElement)
    wrapper.append(container)
}



export function calculatePrices(item) {
    const oldPrice = item.price;


    const discountedPrice = oldPrice - (oldPrice * item.discount) / 100;

    return [oldPrice, discountedPrice]
}





export function create(elementName, text, className) {
    const element = document.createElement(elementName)
    element.textContent = text
    element.classList.add(className)

    return element



}



export function creatorCards() {

    const cards = document.querySelector("#cards")

    for (let i = 1; i <= 6; i++) {

        const card = create("div", "", "card")

        const imgElement = document.createElement("img")
        imgElement.src = `../assets/images/patricia.png `;
        imgElement.width= "50"
        imgElement.alt = "User Photo"

        const titleElement = create("h3", "Jane Cooper")

        const cntentElement = create("p", "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor")
        card.appendChild(imgElement)
        card.appendChild(titleElement);
        card.appendChild(cntentElement);
        cards.appendChild(card)


    }

}












