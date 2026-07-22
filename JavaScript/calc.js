alert("welcome to calc");
let a=10,b=8;
console.log(`enter the choice to do the opretion on a=${a} b=${b}`);
const prompt = require("prompt-sync")();

let c = prompt("Enter number: ");


switch (c) {
    
    case 1:
        console.log("a+b",a+b);
        break;
        case 2:
            console.log("a-b",a-b);
            break;
            case 3:
                console.log("a*b",a*b);
                break;
                default:
                    
                    console.log("wrong choice");
                }
          