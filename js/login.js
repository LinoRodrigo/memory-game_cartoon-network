const input = document.querySelector('.input-login');
const button = document.querySelector('.button-login');
const form = document.querySelector('.login-game-form');


const validateinput = ({ target }) => {
    if (target.value.length > 1) {
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute('disabled', '')
}

input.addEventListener('input', validateinput);

const validatesubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html'
}

form.addEventListener('submit', validatesubmit);