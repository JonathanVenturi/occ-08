const pageBody = document.querySelector('body');
const myButton = document.getElementById('myButton');

const message = document.createElement('p');
message.textContent = 'Bonjour, vous avez cliqué sur le bouton !';

myButton.addEventListener('click', () => {
    pageBody.appendChild(message);
})