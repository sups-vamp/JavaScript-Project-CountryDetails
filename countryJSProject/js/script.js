function dispCountry(){

    document.querySelector(".info").innerHTML = "";
     let country = document.getElementById("country").value;

 const info = document.querySelector(".info");
 let request = new XMLHttpRequest();
 request.open(
   "GET",
   `https://restcountries.eu/rest/v2/name/${country}`,
   true
 );
 request.send();

 request.addEventListener("load", function () {
   let [data] = JSON.parse(this.responseText);

   let htmlData = `<div class="card" style="width: 18rem;">
<img class="card-img-top" src=${data.flag} alt="Card image cap">
<div class="card-body">
 <h5 class="card-title">${data.name}</h5>
 <p class="card-text">Capital : ${data.capital}</p>
 <p class="card-text">Population : ${data.population}</p>
 <p class="card-text">Region : ${data.region}</p>
 <p class="card-text">Sub-Region : ${data.subregion}</p>
 <p class="card-text">Native Name : ${data.nativeName}</p>
 <p class="card-text">Currency : ${data.currencies[0].name}</p>
</div>
</div>`;

   info.insertAdjacentHTML("afterbegin", htmlData);
 });
   }