const container = document.querySelector('.country-container')
const filterContainer = document.querySelector('.filtered-container')
const filterFieldsCont = document.querySelector('.filter-fields')
let countryData= [];

function getApiData(id){
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            createCard(response,container)
        })
}

function searchInputValue(searchValue){
    console.log(searchValue)
    console.log("api value",countryData)

    var filteredData = countryData.filter((val)=>{
        if(val.name.common.toLowerCase().includes(searchValue.toLowerCase())){
            return val
        }
    })
    console.log(filteredData)
    container.classList.add('hide')
    createCard(filteredData,filterContainer )
}

// function searchApiData(data){
//     const sValue = searchInputValue();
//     console.log("insided seacrhAPIData...",sValue)
// }

function createCard(apiData, location){

    countryData = [...apiData]

    apiData.forEach((country) =>{
        const card = document.createElement('div')
        card.classList.add('card')
    
    
        const image = document.createElement('img')
        image.src = country.flags.svg

        const heading3 = document.createElement('h3')
        heading3.innerHTML = country.name.common

        const para1 = document.createElement('p1')
        para1.innerHTML = country.population

        const para2 = document.createElement('p2')
        para2.innerHTML = country.region

        const para3 = document.createElement('p3')
        para3.innerHTML = country.capital

       /*const para4 = document.createElement('p4')
        para4.innerHTML = country.languages.object*/
    
    
        card.appendChild(image)
        card.appendChild(heading3)
        card.appendChild(para1)
        card.appendChild(para2)
        card.appendChild(para3)
        /*card.appendChild(para4)*/
    
        location.appendChild(card)
    })  
}

getApiData()
