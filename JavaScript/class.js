// let student={
//     name:"mayank",
//     age:20,
//     num:0,
//     display: function()
//     {
//         console.log(age ,name,num);
//     }
// }
// let student2=["mayank",20,0];
console.log("enter random number");
let num=prompt("enter number: ");
let x;
do{
    console.log("guess the number :");
    x = prompt();
}while(num!=x)
console.log("your guess is correct");
