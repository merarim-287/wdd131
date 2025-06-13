const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" loading=lazy 
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" loading=lazy 
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" loading=lazy 
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" loading=lazy 
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" loading=lazy 
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" loading=lazy 
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" loading=lazy 
  },
  {
    templeName: "Anchorage Alaska Temple",
    location: "13161 Brayton Dr. Anchorage, ALaska",
    dedicated: "January 9th, 1999",
    area: 11937, 
    ImageUrl: "https://churchofjesuschristtemples.org/anchorage-alaska-temple/photographs/" loading=lazy 
  },
  {
    templeName: "Manhatan New York Temple",
    location: "125 Columbus Av. Fourt Floor New York, New York",
    dedicated: "13 June, 2004",
    area: 20630,
    imageUrl: "https://churchofjesuschristtemples.org/manhattan-new-york-temple/photographs/" loading=lazy 
  },
  {
    templeName: " Oaxaxa, Maxico Temple",
    location: "Avenida Universidad #139 Fracc. Real de Candiani",
    dedicated: "11 March, 2000",
    area: 10700,
    imageUrl: "https://churchofjesuschristtemples.org/oaxaca-mexico-temple/photographs/" loading=lazy
  }
];

document.getElementById("old-btn").addEventListener("click", () => filteredTemples("old"));
document.getElementById("new-btn").addEventListener("click", () => filteredTemples("new"));
document.getElementById("large-btn").addEventListener("click", () => filteredTemples("large"));
document.getElementById("small-btn").addEventListener("click", () => filteredTemples("small"));
document.getElementById("home-btn").addEventListener("click", () => displayTemples("temples"));

function filterTemples(criteria) {
    let filteredTemples = temples; // Start with all temples

    if (criteria === "old") {
        filteredTemples = temples.filter(t => parseInt(t.dedicated) < 1900);
    } else if (criteria === "new") {
        filteredTemples = temples.filter(t => parseInt(t.dedicated) > 2000);
    } else if (criteria === "large") {
        filteredTemples = temples.filter(t => t.area > 90000);
    } else if (criteria === "small") {
        filteredTemples = temples.filter(t => t.area < 10000);
    }

    displayTemples(filteredTemples);
}

function displayTemples(temples) {
    const templeContainer = document.getElementById("temple-container"); 
    templeContainer.innerHTML = ""; // Clear existing temples

    temples.forEach(temple => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");

        templeCard.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area} sqft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        templeContainer.appendChild(templeCard);
    });
}

document.addEventListener("DOMContentLoaded", () => displayTemples(temples));

const yearsSpan = document.getElementById("currentyear");
yearsSpan.textContent = new Date().getFullYear();

const lastModifiedSpan = document.getElementById("lastModified");
lastModifiedSpan.textContent = document.lastModified;