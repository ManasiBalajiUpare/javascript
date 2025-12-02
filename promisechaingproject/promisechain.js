function getUser()
{
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("users data fetching.....");
            resolve({id:1,name:'manasi'})

        },1000);
     });
}
function getOrders(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Orders fetching ...");
            resolve(["watch","mobile","shoes "]);
        },1000);
    })
}
function getTotal(order){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("calculating total");

            resolve(order.length*1000);
        },1000);
    });
}
getUser()
.then((user)=>getOrders(user))
.then((order)=>getTotal(order))
.then((total)=>{
    console.log("total is",total);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("all operations is done");
})