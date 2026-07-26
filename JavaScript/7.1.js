arr=[1,2,3,4,5,6];
x="hello";
 avg=(arr)=>{
    i=0;
    sum=0;
    while(i<arr.length)
    {
        sum+=arr[i++];
    }
    avg2=sum/i;
    console.log(avg2);
   
}
avg(arr);

