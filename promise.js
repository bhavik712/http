
// const divide = (a,b) => new Promise((resolve, reject)=>{
//     b ? resolve(a/b) : reject('divider should not be zero')
// })

// divide(4,2).then((data)=>{
//     return divide(4, data-1)
//     }).then((data)=>{console.log(data)
//     }).catch((err)=>console.log(err)) ;

 const mul =  (num) => new Promise((resolve,reject)=>{
    typeof num === 'number' ? resolve(num*2) : reject ('it is not number');
   })

const getdata = async () =>{
    let result = await mul(2);
    result = await mul(result);
    return result;
}

console.log(getdata());
//  mul(2).then((data)=>console.log(data), (err)=>console.log(err));

// mul('3').then((data)=>{
//     return mul(data)
// }).then((data)=>{
//     return mul(data)
// }).then((data)=>{
//     return mul(data)
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>console.log(err));