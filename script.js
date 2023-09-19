// JavaScript for toggling content
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-button");
    const hiddenContent = document.getElementById("hidden-content");

    toggleButton.addEventListener("click", function () {
        hiddenContent.classList.toggle("hidden");
    });
});


// Get the buttons by their IDs
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// Add event listeners for mouseover and mouseout
button1.addEventListener('mouseover', () => {
    button1.style.backgroundColor = 'red';
});

button1.addEventListener('mouseout', () => {
    button1.style.backgroundColor = '#333';
});

button2.addEventListener('mouseover', () => {
    button2.style.backgroundColor = 'blue';
});

button2.addEventListener('mouseout', () => {
    button2.style.backgroundColor = '#333';
});
