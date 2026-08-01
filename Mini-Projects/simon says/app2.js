let str = document.querySelectorAll(".btn");
let color = ["red", "yellow", "green", "blue"];
let h2=document.querySelector("h2");
let i = 0;
let path = [2, 1];
let level = 0;
let pass = true;
let userpath = [];
document.addEventListener("keydown", (event) => {

    if(event.key === " ")
    {
        start();
    }

});
function random() {
  return Math.floor(Math.random() * 4);
}
function flash() {
  return new Promise((resolve) => {
    const stop = setInterval(() => {
      if (i >= path.length) {
        // console.log("loop completed");
        clearInterval(stop);
        resolve();
        return;
      }
      let old_i = i;
      str[path[i]].style.backgroundColor = "black";
      setTimeout(() => {
        str[path[old_i]].style.backgroundColor = color[path[old_i]];
      }, 200);

      i++;
    }, 500);
  });
}
async function newlvl() {
  let x = random();
  path.push(x);
  level++;
  h2.innerText=`your on level : ${level} `;
  i = 0;
  console.log(path);
  await flash();
  //    console.log("this printed after flash");
}
async function start() {
  if (!pass) {
    console.log("your out");
    end();
    return;
  }
  await newlvl();
  // console.log("in start function ");
  userpath.splice(0, userpath.length);
  console.log("userpath before check:", userpath);
  pass = await check();
  console.log("run after check");
  start();
}
function check() {
  return new Promise((resolve) => {
                resolve_copy = resolve;//check wait till resolve(true) and that come from resolve_copy because resolve() is poiting to resolve__check
  });
}
str.forEach((btn, index) => {

  btn.addEventListener("click", () => {
    
    str[index].style.backgroundColor="grey";
    setTimeout(()=>{
        str[index].style.backgroundColor=color[index];
    },200);

    userpath.push(index);
     if(userpath.length === path.length){
    resolve_copy(userpath.every((val, idx) => val === path[idx]));
     }
  });
});
function end()
{
    
    h2.innerText=`Congratulation you completed ${level-1} levels`;
    h2.style.color="green";
}