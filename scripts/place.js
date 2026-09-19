document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

function calculateWindChill(tempF, speed) {
    if(tempF <=50 && speed > 3) {
        return (
    35.74 +
0.6215 *tempF -
35.75 * Math.pow(speed,0.16) +
0.4275 * tempF * Math.pow(speed, 0.16)
).toFixed(1);
} else {
    return "N/A";
}
}

const temp = parseFloat(document.getElementById("temp").textCpntent);
const wind = parseFloat(document.getElementById("wind").textContent);

const windChill = calculateWindChill(temp, wind);

document.getElementById("windchill").textContent = windChill;