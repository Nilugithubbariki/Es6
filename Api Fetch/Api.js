document.getElementById("click").addEventListener("click",function(){
    fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        return res.json()
    }).then((data)=>{
        let total = document.getElementById("result")
        data.forEach(element => {
            total.innerHTML += `
            <div>ID : ${element.id}</div>
            <div>TITLE : ${element.title}</div>
            <div>BODY : ${element.body}</div>
            `
        });
    }).catch((error)=>{
        console.log(error)
    })
})