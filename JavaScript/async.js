
function ran_num()
{
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            let a= Math.floor(Math.random()*10)+1;
            console.log(a);
            if(a>5)
            {
                resolve();
            }
            else
            {
                reject("promise rejected");
            }
        },1000);

    });
}
async function demo()
{
    try{

        await ran_num();
        await ran_num();
        await ran_num(); 
        await ran_num();
    }catch(err)
    {
        console.log("error is caught");
        console.log(err);
    }

}