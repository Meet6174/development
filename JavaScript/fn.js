const sum = (a, b) => {
  return a + b;
};
function sum2(a, b) {
  return a + b;
}
//run after 4 sec .setTimeout(fn,time)
// setTimeout(()=>{
//     console.log("4s is completed");
// },4000);
// console.log("sum =",sum(1,3),"sum 2=",sum2(4,9));

//print after every 2sec .setInterval(fun,time)
// function display(){
//     console.log("by");
// }
// setInterval(display,2000);
name="rahul";
id=40;
const student = {
  name: "meet",
  id: 20,
  displayname: function () {
    console.log("from name :");
    console.log(this);
    console.log(this.name);
    console.log(name);
  },
  displayid: () => {
    console.log("from id -------------------");
    console.log(this);
    console.log(this.id);
    console.log(id);
  },
};
student.displayname();
student.displayid();
