let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    if(body.classList.contains("dark")) {
        themeName.innerText = "jasny";
    } else {
        themeName.innerText = "ciemny";
    }
});

let day = document.querySelector(".day").innerText;
let howMuch = document.querySelector(".howMuch");

if(day === "poniedziałek" || day === "wtorek") {
    howMuch.innerText = "dużo";
} else if (day === "środa" || day === "czwartek") {
    howMuch.innerText = "trochę";
} else {
    howMuch.innerHTML = "mało";
}

