// Dark  & Light theme
const body = document.querySelector("body");
const main = document.querySelector("main");
const toggle = document.querySelector("#toggle");
const buttonTheme = document.querySelector(".theme input");

// Drag & Drop
const dragArea = document.querySelector(".drag-area");
const dragChange = document.querySelector(".drag-area .dragover");
const buttonBrowse = document.querySelector(".drag-area .btn");
const inputBrowse = document.querySelector(".drag-area .browse");


// Formalities when file is dropped
const mainDrop = document.querySelector(".before-drop");
let file;


// Dark & Light Theme Listners
toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
});


// Drag & Drop Listners
dragArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    dragArea.classList.add("active");
    dragChange.textContent = "Release to play video"
});

dragArea.addEventListener("dragleave", (event) => {
    event.preventDefault();
    dragArea.classList.remove("active");
    dragChange.textContent = "Drag & Drop";
});

dragArea.addEventListener("drop", (event)=>{
    event.preventDefault();

    file = event.dataTransfer.files[0];
    extensionValidate();

});


// Browse Video Functionality
inputBrowse.addEventListener("change", function(){
    file = this.files[0];
    extensionValidate();

});


// Extension Validate Functionality
function extensionValidate(){
    let fileType = file.type;
    mime = ["video/x-matroska","video/mp4", "image/jpeg"]
    

    if(mime.includes(fileType)){
        alert("Valid File Type");
    }
    else{
        alert("Invalid File Type");
        dragArea.classList.remove("active");
    }
}

// click on button will led to click on input
buttonBrowse.onclick = () => {
    inputBrowse.click();
}

