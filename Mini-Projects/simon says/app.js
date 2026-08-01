let path=[];
let level=0;
let userpath=[];

let str = document.querySelectorAll(".btn");
//     str.forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//         console.log("You clicked button number: " + index);
//         userpath.push(index);
//     });
// });

function random() {
  return Math.floor(Math.random() * 3);
}
function newlvl()
{
    let h2 = document.querySelector("h2");
    h2.innerText=`your Level is : ${level+1}`;
    let i=random();
    path.push(i);
    flash(path);
    let status=check();
    if(status)
    {
        newlvl();
    }
    else{
        alert("game over");
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function flash()
{
     for(let i=0;i<path.length;i++)
    {
        let x=window.getComputedStyle(str[path[i]]);
        let temp=x.backgroundColor;
        str[path[i]].style.backgroundColor="rgb(0,0,0)";
        await sleep(1000); 
        str[path[i]].style.backgroundColor=temp;
        await sleep(500);
    }
}
function check()
{
    let j=0;
    let size=1;
    let bool=true;
    str.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        console.log("You clicked button number: " + index);
        // userpath.push(index);
        if(index!=path[j])
            {
                bool=false;
            }
            if(size==path.length)
            {
                return true;
            }
        j++;
        size++;
    });
  });

}
