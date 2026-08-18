// function db(x, pass, fail) {
//   let netspeed = Math.floor(Math.random() * 10) + 1;
//   let data = x;
//   if (netspeed > 5) {
//     pass();
//   } else {
//     fail();
//   }
// }
//call back hall
// db(
//   "data 1",
//   () => {
//     console.log("data 1 is uploaded");
//   },
//   () => {
//     console.log("Failed in data 1");
//     db(
//       "data 2",
//       () => {
//         console.log("data 2 is uploaded");
//       },
//       () => {
//         console.log("Failed in data2");
//         db(
//           "data3",
//           () => {
//             console.log("data 3 is uploaded");
//           },
//           () => {
//             console.log("Failed in data 3");
//           },
//         );
//       },
//     );
//   },
// );
//promise chaining
function db(x) {
    return new Promise((resolve,reject)=>{
        let netspeed = Math.floor(Math.random() * 10) + 1;
        if (netspeed > 5) 
        {
            resolve("Success in "+x);//using + to combine string because then,catch only read first argument they ignore x to include
        } 
        else
        {
            reject("failed in "+x);
        }
    });
}
db("data 1")
.then((val)=>
{
    console.log(val);
    return  db("data 2");
})
.then((val)=>{
    console.log(val);
    return  db("data 3");
})
.then((val)=>{
     console.log(val);
})
.catch((e)=>{
    console.log(e);
});

// both code are same
