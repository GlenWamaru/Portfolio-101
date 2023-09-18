// JavaScript for toggling content
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-button");
    const hiddenContent = document.getElementById("hidden-content");

    toggleButton.addEventListener("click", function () {
        hiddenContent.classList.toggle("hidden");
    });
});
// JavaScript for mouseover effect
const hoverButton = document.getElementById("hover-button");

hoverButton.addEventListener("mouseover", function () {
    hoverButton.style.backgroundColor = "#ff9900"; // Change to a different color on hover
});

hoverButton.addEventListener("mouseout", function () {
    hoverButton.style.backgroundColor = ""; // Reset the color when the mouse moves away
});
