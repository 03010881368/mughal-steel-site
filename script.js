// Welcome Message Function
function showMessage() {
    alert("Welcome to Mughal Steel Products - Premium Stainless Steel Tables!");
}
// Button Click Event
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("welcomeBtn");
    if (btn) {
        btn.addEventListener("click", showMessage);
    }
});
document.getElementById("welcomeBtn").addEventListener("click", function() {
    window.location.href = "https://wa.me/923010881368";  
});

