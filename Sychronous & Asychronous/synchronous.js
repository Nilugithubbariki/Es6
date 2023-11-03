                                                //SYCHRONOUS-----
function myfun(){
    console.log("Inside Function")
}
console.log("Start")
myfun();
console.log("End")



                                                //ASYCRONOUS------
console.log("Start")
setTimeout(()=>{
    console.log("Inside SetTimeout")
},2000)
console.log("End")

console.log("Start");
function getName(name,callback){
    setTimeout(()=>{
        console.log("Inside SetTimeOut");
        callback (name);
    },2000)
}
getName("Nilanchala Bariki",(nm)=>{

    console.log(nm);
})



function getHobbies(name,callback){
    setTimeout(()=>{
        console.log("Inside Hobbies SetTimeOut");
        callback(["Cricket,footbal,basketball"])
    },2000)
}
const nm  = getHobbies((hobby)=>{
    console.log(hobby)
})

