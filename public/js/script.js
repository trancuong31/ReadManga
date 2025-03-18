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

//register
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = { username, email, password };

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data) 
        });

        const result = await response.json(); 
        console.log('Success:', result);
        alert(result.message || 'Signup successful!');
    } catch (err) {
        console.error("Error register", err);
        alert('Signup error!');
    }
});
