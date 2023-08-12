// Country Sorting 

const countries = [
    { name: 'United States', alpha2Code: 'US' },
    { name: 'Canada', alpha2Code: 'CA' },
    { name: 'United Kingdom',alpha2Code: 'UK'},
    
]
// Function that will generate options for the select element
function generateCountryOptions() {
    const countrySelect = document.getElementById('country');
    
    for (const country of countries) {
        const option = document.createElement('option');
        option.value = country.alpha2Code;
        option.textContent = country.name;
        countrySelect.appendChild(option);
    }
}

generateCountryOptions();