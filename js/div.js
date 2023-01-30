let day = "sobota";

switch (day) {
    case "poniedziałek":
    case "wtorek":
        console.log("Rozpoczyna się tydzień");
        break;
    case "środa":
    case "czwartek":
        console.log("Zaraz zacznie się weekend");
        break;

    default:
        console.log("Jest weekend");   
}


let number1 = 10
let number2 = 5

let message= number1 > number2 ? "number1 jest większe" : "number2 jest większe"

console.log(message);