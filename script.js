document.getElementById("welcomeBtn").addEventListener("click", function() {
    window.location.href = "https://wa.me/923010881368";  
});

document.addEventListener("DOMContentLoaded", function() {
    const welcomeText = document.getElementById("welcomeText");
    welcomeText.style.opacity = 0;
    setTimeout(() => {
        welcomeText.style.opacity = 1;
        welcomeText.style.transition = "opacity 2s";
    }, 500);
});

