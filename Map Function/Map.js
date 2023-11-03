// let arr = [2,3,4,5,6,7,8];
// let arr1 = arr.map((value,index,arr)=>{
//     return(
//         value*3
//     )
// })
// console.log(arr1)

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

const output = users.map((item)=>{
    return item.firstName + " " + item.lastName
})
console.log(output)

