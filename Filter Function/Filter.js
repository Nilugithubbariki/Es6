// const team = [
//     {
//         name:"Nilanchala Bariki",
//         position: "Frontend Developer"
//     },
//     {
//         name:"Nilu Bariki",
//         position: "Backend Developer"
//     }
// ]

// const developer = team.filter((value)=>{
//     return(
//         value.position == "Backend Developer"
//     )
// })
// console.log(developer);

// const arr = [5,1,3,2,6];
// const output_Filter = arr.filter((item)=>{
//     if(item%2 ===0){
//         return item
//     }
// })
// console.log(output_Filter)


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

const output = users.filter((item)=>{
    if(item.age<30){
        return item;
    }
}).map((item)=>{
    return item.firstName
})
console.log(output)
