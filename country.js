//created a request to restcountry by using its api endpoint 
//get the countries array of 249 objects
//get the object of India using alpha2code 
//printed the name from Object(India) --> Object(name)-->common name 


//showing Asian countries by filtering countries arrray 

const newRequest = new XMLHttpRequest();

newRequest.addEventListener('readystatechange', (e)=>{
    if (e.target.readyState === 4 && e.target.status === 200){
        const countries = JSON.parse(e.target.responseText);
        const myCountry = countries.find((country)=>country.cca2 === 'IN');
        countryDetails(myCountry.cca2,myCountry.name.common);
        const asianCountries = countries.filter((country)=>country.region === 'Asia');
        showAsianCountries(asianCountries);

    }
})

const countryDetails = (countryCode, countryName)=>{
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
newRequest.open('GET', 'https://restcountries.com/v3.1/all');
newRequest.send();