document.addEventListener("DOMContentLoaded", () => {
    const userName = prompt("Please enter your name:");
    const lastName = prompt("Please enter your LastName:")
    if (userName) {
        document.getElementById("name").textContent = `Hello, ${userName} ${lastName}!`;
    } 
});
