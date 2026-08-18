let bt=document.querySelector("#btn");

bt.addEventListener("click",async ()=>{
    let p=document.querySelector("#info");
    p.innerText=await getdata();
});
//axios is lab to make work easy with apis 
// just add <script src="https://cdn.jsdelivr.net/npm/axios@1.13.2/dist/axios.min.js"></script> in html code

let url= "https://catfact.ninja/fact";
async function getdata()
{
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }
    catch(e)
    {
        console.log("Error is :",e);
    }
}