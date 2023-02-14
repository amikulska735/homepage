{
    const welcome = () => {
    console.log("Cześć!");
} 
welcome();

const toggleBackground = () => {
    const bodyElement = document.querySelector(".js-body");
    const changeBackground = document.querySelector(".js-changeBackground");

    bodyElement.classList.toggle("body--dark");
    changeBackground.innerText = bodyElement.classList.contains("body--dark") ?
    "jasny" : "ciemny";
};
const onRemoveButtonClick = () => {
    const photoElement = document.querySelector(".js-photo");
    const spanElement = document.querySelector(".js-span");
    photoElement.remove();
    spanElement.remove();
};
const init = () => {
    const buttonElement = document.querySelector(".js-button");
    buttonElement.addEventListener("click", toggleBackground);
    const photoElement = document.querySelector(".js-photo");
    photoElement.addEventListener("click", onRemoveButtonClick);
};
init();
}


