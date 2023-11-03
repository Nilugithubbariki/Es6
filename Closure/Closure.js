//A closure is an iner function that has access to the outer (enclosing) function's variables.
//For every closure we have three scopes:-
// 1 :- Local Scope (Own Scope)
// 1 :- Outer Functions Scope
// 2 :- Global Scope

// var i = 10;
// function hello(){
//     var j = 20;
//     // console.log(j);
//     // console.log(i)
// }
// hello();
// console.log(i);
// console.log(j);

function hello(){
    console.log("Nilanchala Bariki");
    
    function hii(){
        console.log("Nilu Bariki");
    }
    hii()
}
hello();
