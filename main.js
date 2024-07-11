document.addEventListener("DOMContentLoaded", () => {
    const userName = prompt("Please enter your name:");
    if (userName) {
        document.querySelector("#name").textContent = `Hello, ${userName}!`;
    }
});
