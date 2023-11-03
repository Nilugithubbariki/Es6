function name(){
    console.log("Nilu Bariki")
}
function setName(){
    console.log("Nilanchala Bariki")
}
function getName (num1,num2,callback) {
console.log(num1+num2);
callback();
}
getName(3,5,setName);
getName(6,4,name);