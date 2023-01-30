let number1 = 5;
let number2 = 10;
if(number1 < number2) {
    console.log("number1 jest mniejsze");
}else {
    console.log("number 1 nie jest mniejsze");
}
let container = document.querySelector(".container");
console.log(container);

if(container.classList.contains("dark")) {
    console.log("Kontener jest ciemny!");
}
let button = document.querySelector(".button");

button.addEventListener("click", () => {
    if (button.innerText === "Włącz ciemny motyw") {
        button.innerText = "Wyłącz ciemny motyw";
    }
})
 let number3 = 1;
 let number4 = 2;
 let number5 = 3;
 if (number3 > number4) {
    if (number3 > number5) {
        console.log("number3 jest największa!");
    } else {
        console.log("number5 jest największa!");
    }
} else {
    if (number4 > number5) {
        console.log("number4 jest największa!")
    } else {
        console.log("number5 jest największa!")
    
}
 }