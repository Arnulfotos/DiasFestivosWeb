// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
let countrySelect = document.getElementById("country");
let btnSend = document.getElementById("btnSend");
let content = document.getElementById("content");

countrySelect.addEventListener("change", () => {

    const response = fetch(`https://date.nager.at/api/v3/PublicHolidays/2023/${countrySelect.value}`)
    response.then(data => {

        return data.json();
    }).then(body => {

        let listItems = ''

        Object.entries(body).forEach((entry) => {

            const [key, value] = entry;
            listItems += `<li class="list-group-item"> ${value.date} - ${value.localName}</li> `;

        });

        content.innerHTML = listItems;


    })
   
})

btnSend.addEventListener("click", () => {


    


    const response = fetch(`https://date.nager.at/api/v3/PublicHolidays/2023/${countrySelect.value}`)
    response.then(data => {
       
        return data.json();
    }).then(body => {

        let listItems = ''

        Object.entries(body).forEach((entry) => {
            
            const [key, value] = entry;
            listItems += `<li class="list-group-item"> ${value.date} - ${value.localName}</li> `;

        });

        content.innerHTML = listItems;

     
    })
})



