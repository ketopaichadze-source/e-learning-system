
import { coursess, podcasts, books,booksData} from "./data.js"
import {create} from "./function.js"

const headerDiv = document.querySelector(".lit-header")




const titleName =create("h3","John Anderson")


const enrollbtn = document.createElement("a")
enrollbtn.classList.add("enrollbtn")
enrollbtn.textContent="Enroll Now"
enrollbtn.href = "#"

headerDiv.append(titleName,enrollbtn)
headerDiv.classList.add("flex","justify-between", "padding-30","font-15")


const aboutTeacher = document.querySelector(".about")

const teachersDegree = document.createElement("span")
teachersDegree.textContent = "Assistant Professor at Mcmaster University"
const content = document.createElement("p")
content.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrud"

aboutTeacher.append(teachersDegree)
aboutTeacher.append(content)
aboutTeacher.classList.add("flex","direction-column","gap-15","padding-10")

const courseReiting = document.querySelector(".reiting")
const reiting = document.createElement("span")

reiting.textContent="4.9 instructor Rating"
const students = document.createElement("span")
students.textContent= "1,592 Students"
const courses = document.createElement("span")
courses.textContent = "Courses"

courseReiting.append(reiting,students,courses)
courseReiting.classList.add("flex","gap-30")



const coursesContainer = document.getElementById("coursesList")
coursess.forEach(course => {
    const link = document.createElement("a")
    link.href = "#"
    link.textContent = course.title
    coursesContainer.appendChild(link)
});



const podcastsContainer = document.getElementById("podcastsList")
podcasts.forEach(podcast => {
    const link = document.createElement("a")
    link.href = "#"
    link.textContent = podcast.title
    podcastsContainer.appendChild(link)
});

const booksContainer = document.getElementById("booksList")
books.forEach(book => {
    const link = document.createElement("a")
    link.href = "#"
    link.textContent = book.title
    booksContainer.appendChild(link)
});




const section = document.querySelector(".books");

function createBookItem(title,price){
    const bookList = document.createElement("div")
    bookList.classList.add("book-list")

    const bookTitle = document.createElement("p")
    bookTitle.textContent = title

    const bookPrice = document.createElement("span")
    bookPrice.textContent = price
    bookPrice.style.color = "#49BBBDCC"
    bookList.classList.add("flex","justify-between","contend-end","margin-t-35","font-weight-20","padding-10")
    bookList.append(bookTitle)
    bookList.append(bookPrice)

    return bookList


}

const myBookList=createBookItem("All Benefits of PLUS","$24")



// const bookCard = document.querySelector(".book-card")
// bookCard.append(myBookList)

booksData.forEach(book => {
    const card = createBookItem(book.title, book.price);
    section.append(card);
})

