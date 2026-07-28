//spread
let std1={
    name:"meet",
    ennum:20
};
let copy_std1={
    ...std1,
    id:21
};
// console.log(copy_std1);
let arr=[1,5,45,4454,4,5,0,4,56];
let copy_arr=[...arr];
console.log(...copy_arr);
let s1="hello everyone"
let s1_arr={...s1};
console.log(s1_arr);