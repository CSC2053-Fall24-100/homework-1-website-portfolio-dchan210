const welcomeMessage = document.getElementById('welcome-header');
console.log(welcomeMessage.textContent);

const nameButton = document.getElementById('add-name');
const title = document.getElementById('welcome-header');
nameButton.addEventListener('click', function () {
    const name = prompt("Please enter your name: ");
    title.textContent = "Welcome, " + name + "!";
});
