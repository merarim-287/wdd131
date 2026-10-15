const params = new URLSearchParams(window.location.search);

document.querySelector("#product").textContent = params.get("product");
document.querySelector("#rating").textContent = params.get("rating");
document.querySelector("#installDate").textContent = params.get("installDate");
document.querySelector("#reviewText").textContent = params.get("review") || "No written review";
document.querySelector("#username").textContent = params.get("username") || "Anonymous";

const features = params.getAll("features");
document.querySelector("#features").textContent = features.lenght ? features.join(", ") : "None";

let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
reviewCount++;

localStorage.SetItem("reviewCount", reviewCount);
document.querySelector("#reviewCount").textContent = reviewCount;

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;
