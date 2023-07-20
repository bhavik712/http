// request

// use of call back 
const getPuzzle = () => new Promise((resolve, reject) =>{
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange',(e)=>{
        if(e.target.readyState === 4 && e.target.status === 200 ){
        const data = JSON.parse(e.target.responseText);
        resolve(data.puzzle);
        }
        else if(e.target.readyState === 4){
            const error = 'there is some error';
            reject(error);
        }
    })

    request.open('GET','https://puzzle.mead.io/puzzle');

    request.send()


} )

getPuzzle().then((puzzle)=>console.log(puzzle), (error)=>console.log(error));

// const getPuzzleSync = () =>{
//     const request = new XMLHttpRequest()
//     request.open('GET','https://puzzle.mead.io/puzzle',false);
//     request.send();
//     if(request.readyState === 4 && request.status === 200 ){
//         const data = JSON.parse(request.responseText);
//         return data.puzzle;
//         }
//     else if(request.readyState === 4){
//         const error = 'there is some error';
//         return error;
//     }
// }

// const puzzle = getPuzzleSync();
// console.log(puzzle);

    
