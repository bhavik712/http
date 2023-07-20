//request 
//use of call back 
const getPuzzle = (callback) =>{
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange',(e)=>{
        if(e.target.readyState === 4 && e.target.status === 200 ){
        const data = JSON.parse(e.target.responseText);
        callback(undefined,data.puzzle);
        }
        else if(e.target.readyState === 4){
            const error = 'there is some error';
            callback(error, undefined);
        }
    })

    request.open('GET','https://puzzle.mead.io/puzzle');

    request.send()
}

getPuzzle((error,puzzle)=>{
    if(error){
        console.log(`error --> ${error}`);
    }
    else{
        console.log(puzzle)
    }
})