const HideButton = document.getElementById('toggle-schedule');
const container = document.getElementById('schedule-container');
HideButton.addEventListener('click', function () {
    if (container.style.display == "none") {
        container.style.display = "block";
        HideButton.textContent = "Hide Schedule";
    }
    else {
        container.style.display = "none";
        HideButton.textContent = "Show Schedule";
    }
});
