//created a request to restcountry by using its api endpoint 
//get the countries array of 249 objects
//get the object of India using alpha2code 
//printed the name from Object(India) --> Object(name)-->common name 
//showing Asian countries by filtering countries arrray
//defined every function in the country-functions file & called here.

const countryCode = 'IN';
let asianCountries = [];
findCountryDetails (countryCode, (name, asianCountries)=>{
    showCountryDetails(countryCode,name);
    showAsianCountries(asianCountries);
    });







