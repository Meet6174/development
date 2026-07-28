// //DOM:document object module
// //pet_adoption

// let ob1=document.getElementById("top");
// let ob2=document.all[10];
// // ob2.innerText="hello"; 
// ob1=document.getElementsByClassName("card");//return all card class 
// ob2=document.getElementsByTagName("h1");
// //short but gives first occurence only
// ob1=document.querySelector("#top");
// ob1=document.querySelector(".card");
// ob1=document.querySelector("h1");

let para=document.createElement("p");
para.innerText="hello i am from  dom.js";
document.querySelector("body").append(para);
para.classList.add("span2");
