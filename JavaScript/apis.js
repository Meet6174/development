// let data = '{"fact":"The oldest cat on record was Cr\u00e8me Puff from Austin, Texas, who lived from 1967 to August 6, 2005, three days after her 38th birthday. A cat typically can live up to 20 years, which is equivalent to about 96 human years.","length":220}';
// let res=JSON.parse(data);
// console.log(res.fact);
// ----------------
// let url= "https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     // console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log("Error in DB :"+err);
// })
//------------------

let url= "https://catfact.ninja/fact";
async function getdata()
{
    try{let res=await fetch(url);
    let data= await res.json();
    console.log(data.fact);}
    catch(e)
    {
        console.log("Error is :",e);
    }
}
getdata();