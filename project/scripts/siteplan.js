function setFooterDates() {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").innerHTML = document.lastModified;
}
setFooterDates();

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
            if (entry.isINtersecting) {
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
        service.classList.toggle("hightlight");
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
}

