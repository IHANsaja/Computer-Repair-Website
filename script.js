document.getElementById("hamburger-icon").addEventListener("click", function() {
    document.getElementById("menu-popup").classList.add("show");
    document.getElementById("hamburger-icon").style.display = "none";
    document.getElementById("close-icon").style.display = "block";
});

document.getElementById("close-icon").addEventListener("click", function() {
    document.getElementById("menu-popup").classList.remove("show");
    document.getElementById("hamburger-icon").style.display = "block";
    document.getElementById("close-icon").style.display = "none";
});
