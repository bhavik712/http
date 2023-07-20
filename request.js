//request 

const request = new XMLHttpRequest()

request.addEventListener('readystatechange',(e)=>{
    if(e.target.readyState === 4 && e.target.status === 200 ){
        console.log(JSON.parse(e.target.responseText));
    }
})

request.open('GET','https://puzzle.mead.io/puzzle');

request.send()