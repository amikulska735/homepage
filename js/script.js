console.log("Cześć!");

let buttonElement = document.querySelector(".button");
let bodyElement = document.querySelector(".body");
let changeBackground = document.querySelector(".changeBackground");

buttonElement.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
    changeBackground.innerText = bodyElement.classList.contains("dark") ?
    "jasny" : "ciemny";
});
