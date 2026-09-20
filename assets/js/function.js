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