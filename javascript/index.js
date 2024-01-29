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

updateTime();
setInterval(updateTime, 1000);