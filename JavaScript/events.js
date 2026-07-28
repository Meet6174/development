//forms.html
// let ob=document.querySelector("#ser");
// ob.onclick= function(){
//     console.log("button was clicked");
//     alert("dont click it");
// };
// ob.onmouseenter=function(){
//     console.log("Dont touch the button");
// };
//-------------

let ob=document.querySelector("#zero");
let btn=document.querySelector("#btn");
let h=document.createElement("h1");
btn.onclick=function(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    h.innerText=`rgb(${red},${green},${blue})`;
    document.querySelector("body").append(h);
    ob.style.backgroundColor=`rgb(${red},${green},${blue})`;
};