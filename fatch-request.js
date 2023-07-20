


fetch('https://puzzle.mead.io/puzzle', {}).then((response)=>{
    if(response.status == 200){
        return response.json()
    }
    else{
        throw new Error('Unable to get data')
    }
}).then((data)=>{
    console.log(data.puzzle)
}).catch((error)=>{
    console.log(error)
})