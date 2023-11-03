// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(sum(1)(2)(3))

// function Addition(a,b,c){
//     return a+b+c;
// }
// let output = Addition(2,3,4);
// console.log(output)

// function Addition(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// let output = Addition(2)(4)(5);
// console.log(output);
// let data = output(4);
// let data1 = data(5);
// console.log(data1)

// userObj={
//     name:"Nilanchala",
//     age:23
// }
// function userInfo(obj){
//     return function(userInfo){
//         return obj[userInfo]
//     }
// }
// let output = userInfo(userObj);
// console.log(output('age'));