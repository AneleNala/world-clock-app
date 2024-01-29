function updateTime() {

let newyorkElement = document.querySelector("#new-york");
let newyorkDateElement = newyorkElement.querySelector(".date");
let newyorkTimeElement = newyorkElement.querySelector(".time");
let newyorkTime = moment().tz("America/New_York");

newyorkDateElement.innerHTML = newyorkTime.format("D MMMM YYYY");
newyorkTimeElement.innerHTML = newyorkTime.format("H:mm:ss [<small>]A[</small]")

let dakarElement = document.querySelector("#dakar");
let dakarDateElement = dakarElement.querySelector(".date");
let dakarTimeElement = dakarElement.querySelector(".time");
let dakarTime = moment().tz("Africa/Dakar");

dakarDateElement.innerHTML = dakarTime.format("D MMMM YYYY");
dakarTimeElement.innerHTML = dakarTime.format("H:mm:ss [<small>]A[</small]");

}
function SelectedCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let timeZone = moment().tz(cityTimeZone);
    let cityElement = document.querySelector("#cities");
    cityElement.innerHTML = `
    <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date" >
            ${timeZone.format("D MMMM YYYY")}
        </div>
        </div>
        <div class="time" >
            ${timeZone.format("H:mm:ss")} <small>${timeZone.format("A")}</small>
        </div>
    </div>
    <a href="/">All Cities</a>
    `


    
}
updateTime();
setInterval(updateTime, 1000);

let SelectCities = document.querySelector("#city");
SelectCities.addEventListener("change", SelectedCity);