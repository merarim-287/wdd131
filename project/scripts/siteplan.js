

function lazyLoadImages() {
    const images = document.querySelectorAll("img[data-src]");

    const options = {
        threshold: 0.1,
        rootMargin: "0px 0px 50px 0px"
    };

    const loadImage = (image) => {
        image.src = image.dataset.src;
        image.removeAttribute("data-src");
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    images.forEach(img => observer.observe(img));
}

lazyLoadImages();

function highlightService(id) {
    const service = document.getElementById(id);

    if (service) {
        service.classList.toggle("highlight");
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleMenu() {
    const navList = document.querySelector("nav ul");
    navList.classList.toggle("open");
}

function setFooterDates() {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").innerHTML = document.lastModified;
}
setFooterDates();
