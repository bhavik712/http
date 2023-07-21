

const getCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');

    if(response.status === 200){
        return response.json();
    }else{
        throw new Error('unable to fetch data')
    }

}

const findCountryDetails = async (countryCode) =>{
    const countries = await getCountries();
    const myCountry = countries.find((country)=>country.cca2 === countryCode)
    return myCountry.name.common;
}

    
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

const showAsianCountries = async ()=>{
    const countries = await getCountries();
    const asianCountries = countries.filter((country)=>country.region ==='Asia');
    asianCountries.forEach((country)=>{
        const countryNameEle = document.createElement('h2');
        countryNameEle.textContent = country.name.common;
        document.querySelector('body').appendChild(countryNameEle);
        })
}