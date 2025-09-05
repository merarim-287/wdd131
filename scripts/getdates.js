const courseTitle = document.getElementById("course-title");
const name = document.querySelector("main h1").textContent;

const nameSpan = document.createElement("span");
nameSpan.textContent = name;
nameSpan.classList.add("inline-name");

courseTitle.appendChild(nameSpan);
