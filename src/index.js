
const addCountryForm = document.querySelector('.add')
addCountryForm.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log(addCountryForm.country_name.value)
})