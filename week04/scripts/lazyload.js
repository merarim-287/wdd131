document.getElementById("lastModified").innerHTML = document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img[loading='lazy']");

    images.forEach(img => {
        img.addEventListener("load", () => {
            img.classList.add("loaded");
        });
    });
});

