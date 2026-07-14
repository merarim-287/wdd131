document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById("currentYear").textContent = new Date().getFullYear();

const mainnav = document.querySelector('.drop-down')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
})

