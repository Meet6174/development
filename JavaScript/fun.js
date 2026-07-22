let sum=function(a,b)
{
    return a+b;
}
// console.log(sum(1,2));
function multysum(fn,n)
{
    for(let i=0;i<n;i++)
    {
        console.log(fn(i,i));
    }
}
multysum(sum,5);
