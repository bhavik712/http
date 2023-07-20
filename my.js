const myDetails = () => fetch('https://ipinfo.io/?token=9182aa3f9708b7',{}).then((response)=>{
    if(response.status == 200){
        return response.json();
    }
    else{
        throw new Error('no data available');
    }
}).catch((error)=>console.log(error))

myDetails().then((data)=>{
    document.querySelector('#city').textContent = data.city;
    document.querySelector('#region').textContent = data.region;
    document.querySelector('#country').textContent = data.country;

})