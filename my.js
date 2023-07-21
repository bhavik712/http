const myDetails = async () => {
    const response = await fetch('https://ipinfo.io/?token=9182aa3f9708b7')
    if(response.status == 200){
        const data = await response.json();
        return data;
    }
    else{
        throw new Error('no data available');
    }
}

// myDetails().then((data)=>document.querySelector('#city').textContent = data.city);

const showDetails = async ()=>{
    const data = await myDetails();
    const cityName = data.city;
    document.querySelector('#city').textContent = cityName;
}

showDetails();

// myDetails().then((data)=>{
//     
//     document.querySelector('#region').textContent = data.region;
//     document.querySelector('#country').textContent = data.country;

// }).catch((error)=>console.log(error))