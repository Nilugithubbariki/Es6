// const arr = [5,1,3,2,6];

// Sum or Max

// function findSum (arr){
//     let sum = 0;
//     for(let i=0;i<arr.lenght;i++){
//          sum = sum+arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr))

// const result = arr.reduce((acc,current)=>{
//     // acc- Acumilator
//     acc = acc+current;
//     return acc;
// },0)
// console.log(result)
// const output = arr.reduce((acc,current)=>{
//     if(current > acc){
//         acc = current;
//     }
//     return acc;
// })
// console.log(output)



const users = [
    {
        firstName:"Akshya",
        lastName: "Saini",
        age:26
    },
    {
        firstName:"donald",
        lastName:"trump",
        age:75
    },
    {
        firstName:"elon",
        lastName:"musk",
        age:50
    },
    {
        firstName:"deepika",
        lastName:"padukone",
        age:26
    }
]

const output = users.reduce((acc,current)=>{
    if(acc[current.age]){
        acc[current.age] = ++acc[current.age]
    }else{
        acc[current.age] = 1
    }
    return acc;
},{})
console.log(output)