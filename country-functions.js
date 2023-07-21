

const getCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');

    if(response.status === 200){
        return response.json();
    }else{
        throw new Error('unable to fetch data')
    }

}

const findCountryDetails = (countries, countryCode) =>{
    const myCountry = countries.find((country)=>country.cca2 === countryCode)
    return myCountry.name.common;
}

    
const showCountryDetails = (countryCode, countryName)=>{
    const countryCodeEle = document.querySelector('#country-code');
    const countryNameEle = document.querySelector('#country-name');
    countryCodeEle.textContent = countryCode;
    countryNameEle.textContent = countryName;
    
}

const findAsianCountries = (countries)=>{
    const asianCountries = countries.filter((country)=>country.region ==='Asia');
    return asianCountries;
}

const showAsianCountriesNames = (asianCountriesData)=>{
    asianCountriesData.forEach((country)=>{
        const asianCountryNameEle = document.createElement('h2');
        asianCountryNameEle.textContent = country.name.common;
        document.querySelector('body').appendChild(asianCountryNameEle);
    })
}