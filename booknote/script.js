//selecting popup box, popup overlay, button

var popupoverlay = document.querySelector(".popup_overlay")
var popupbox = document.querySelector(".popup_box")
var addpopupbutton = document.getElementById("add_popup_button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

//select cancel button

var cancelbutton = document.getElementById("cancel_popup")
cancel_popup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

//select container, add_book, book_title_input, book_author_input, book_description_input

var container = document.querySelector(".container")
var addbook = document.getElementById("add_book")
var booktitleinput = document.getElementById("book_title_input")
var bookauthorinput = document.getElementById("book_author_input")
var bookdescriptioninput = document.getElementById("book_description_input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book_container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}
