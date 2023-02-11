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
const init = () => {
    const buttonElement = document.querySelector(".js-button");
    buttonElement.addEventListener("click", toggleBackground);
    
};
init();

const removePhoto = () => {
    const photoElement = document.querySelector(".js-photo");
    photoElement.remove();
  };
 const removeSpan = () => {
    const spanElement = document.querySelector(".js-span");
    spanElement.remove();
 };
  const remove = () => {
    const photoElement = document.querySelector(".js-photo");
    photoElement.addEventListener("click", removePhoto);
    photoElement.addEventListener("click", removeSpan);
  };

  remove();
}
