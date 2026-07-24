document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById("currentYear").textContent = new Date().getFullYear();

const temp = 75;
const wind = 10;

function calculateWindChill(t, w) {
    return 35.74 + (0.6215 * t)
        - (35.75 * Math.pow(w, 0.16));
}

let windChillValue = "NA";

if (temp <= 50 && wind > 3) {
    windChillValue = Math.round(calculateWindChill(temp, wind)) + "°F";
}

document.querySelector(".windchill").textContent = windChillValue;