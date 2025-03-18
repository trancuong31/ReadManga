const darkModeButton = document.getElementById("settingdarkmode");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    if (header) header.classList.add("dark-mode");
    if (nav) nav.classList.add("dark-mode");
    darkModeButton.textContent = "☀️"; 
}
darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (header) header.classList.toggle("dark-mode");
    if (nav) nav.classList.toggle("dark-mode");
    // Lưu trạng thái vào Local Storage
    if (document.body.classList.contains("dark-mode") ) {
        localStorage.setItem("darkMode", "enabled");
        darkModeButton.textContent = "☀️"; 
    } else {
        localStorage.setItem("darkMode", "disabled");
        darkModeButton.textContent = "🌙"; 
    }
});

//sigup modal
function openModal() {
    document.getElementById("modalSignup").style.display = "block";
}

function closeModal() {
    document.getElementById("modalSignup").style.display = "none";
}
