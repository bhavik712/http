const findCountryDetails = (countryCode, callback) =>{
    const newRequest = new XMLHttpRequest();

    newRequest.addEventListener('readystatechange', (e)=>{
        if (e.target.readyState === 4 && e.target.status === 200){
            const countries = JSON.parse(e.target.responseText);
            const myCountry = countries.find((country)=>country.cca2 === countryCode);
            asianCountries = countries.filter((country)=>country.region === 'Asia');
            callback (myCountry.name.common,asianCountries);
            }
        })

    newRequest.open('GET', 'https://restcountries.com/v3.1/all');
    newRequest.send();
}

const showCountryDetails = (countryCode, countryName)=>{
    const codeEle = document.querySelector('#country-code');
    const nameEle = document.querySelector('#country-name');
    codeEle.textContent = countryCode;
    nameEle.textContent = countryName;
}

const showAsianCountries = (asianCountries)=>{
    asianCountries.forEach((country)=>{
        const countryNameEle = document.createElement('h2');
        countryNameEle.textContent = country.name.common;
        document.querySelector('body').appendChild(countryNameEle);
    })
}