let searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  let countryInp = document.getElementById("currency").value;
  let finalURL = `https://restcountries.com/v3.1/currency/${countryInp}?fields=name,capital,area`;
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      let dynamicHTML = '';
      for(let i = 0; i < 5; i++){
        dynamicHTML += `<li>País: ${data[i].name.common}; 
        Capital: ${data[i].capital};
        Área: ${data[i].area}</li>`
        //<img src="${data[i].flags.svg}" class="flag-img"> 
      }
      document.getElementById("list-result").innerHTML = dynamicHTML;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>Por favor, digite um país para pesquisa.</h3>`;
      } else {
        result.innerHTML = `<h3>Digite uma moeda válida.</h3>`;
      }
    });
});