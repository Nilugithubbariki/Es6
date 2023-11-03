const promiseObj1 = new Promise((resolve,reject)=>{
    let req = true;
    if(req == false){
        resolve("Request Success")
    }else{
        reject("Request Rejected")
    }
}).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
})

const promiseObj = new Promise((resolve,reject)=>{
    let num = 20;
    resolve(num);
}).then((value)=>{
    console.log(value);
    return value+10
}).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Cleaned Up")
})



console.log("Start");
function getName(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Inside Name SetTimeOut")
            resolve(name);
        },2000)
    })
}

function getHobbies(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Inside Hobbies setTimeOut")
            resolve(["Cricket,FootBal,BasketBall"])
        },3000)
    })
}

async function showHobby(){
const nm = await getName("Nilanchala");
const hobby = await getHobbies(nm);
console.log(hobby);
}
showHobby();