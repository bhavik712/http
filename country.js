//created a request to restcountry by using its api endpoint 
//get the countries array of 249 objects
//get the object of India using alpha2code 
//printed the name from Object(India) --> Object(name)-->common name 
//showing Asian countries by filtering countries arrray
//defined every function in the country-functions file & called here.

// const countries = getCountries().then((data)=>{
//     return data
// });
const countryCode = 'IN';
const countriesData = async ()=>{
    const countries = await getCountries();

    const countryName = findCountryDetails(countries,countryCode)
    showCountryDetails(countryCode,countryName);

    const asianCountriesData = findAsianCountries(countries);
    showAsianCountriesNames(asianCountriesData);

}



countriesData();









