

const getCountries = () => fetch('https://restcountries.com/v3.1/all',{}).then((response)=>{
    if(response.status === 200){
        return response.json();
    }else{
        throw new Error('unable to fetch data')
    }

}).catch((error)=>{
    console.log(error)
})

const findCountryDetails = (countries, countryCode) =>
    countries.then((data)=>{
        const myCountry = data.find((country)=>country.cca2 === countryCode)
        return myCountry.name.common;
    }).catch((error)=>{
        console.log(error)
    })

    
const showCountryDetails = (countryCode, countryName)=>{
    const codeEle = document.querySelector('#country-code');
    const nameEle = document.querySelector('#country-name');
    codeEle.textContent = countryCode;
    countryName.then((countryName)=>{
        nameEle.textContent = countryName;
    }).catch((error)=>{
        console.log(error)
    })
    
}

const showAsianCountries = (countries)=>{
    countries.then((data)=>{
        const asianCountries = data.filter((country)=>country.region ==='Asia');
        asianCountries.forEach((country)=>{
            const countryNameEle = document.createElement('h2');
            countryNameEle.textContent = country.name.common;
            document.querySelector('body').appendChild(countryNameEle);
        })
    }).catch((error)=>{
        console.log(error)
    })
    
}