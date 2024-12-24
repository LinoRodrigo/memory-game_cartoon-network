const grid = document.querySelector('.grid');
const spanplayer = document.querySelector('.player');
const timer = document.querySelector('.timer');


const characters = [
    'perna-loga',
    'jovens-titans-em-acao',
    'hora-de-aventura',
    'tom-e-jerry',
    'irmao-do-jorel',
    'clarencio',
    'ed-dd-d',
    'laboratorio-de-dexter',
    'titio-avo',
    'coragem-o-cao-covarde',

];



const createlements = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}


let firstcard = '';
let secundcard = '';


const checkendgame = () => {
    const disabledcards = document.querySelectorAll('.disabled-card')

    if (disabledcards.length == 20) {
        clearInterval(this.loop);
        alert(`Parabéns, ${spanplayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`);

    }
}

const checkcards = () => {
    const firstcharacter = firstcard.getAttribute('data-character');
    const secundcharacter = secundcard.getAttribute('data-character');

    if (firstcharacter == secundcharacter) {

        firstcard.firstChild.classList.add('disabled-card');
        secundcard.firstChild.classList.add('disabled-card');

        firstcard = '';
        secundcard = '';

        checkendgame();

    }else {

        setTimeout(() => {

            firstcard.classList.remove('reveal-card');
            secundcard.classList.remove('reveal-card');

            firstcard = '';
            secundcard = '';

        }, 500);
        
    }
}


const revealcard = ({target}) => {

    if ( target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstcard == '') {

        target.parentNode.classList.add('reveal-card');
        firstcard = target.parentNode;

    } else if (secundcard == '' ) {

        target.parentNode.classList.add('reveal-card');
        secundcard = target.parentNode;


        checkcards();
    }


}


const creatcard = (character) => {

    const card = createlements('div', 'card');
    const front = createlements('div', 'face front');
    const back = createlements('div', 'face back');

    
    front.style.backgroundImage = `url('../imagens/${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealcard);
    card.setAttribute('data-character', character)

    return card;
}


const loadgame = () => {

    const duplicatcharacter = [...characters, ...characters];

    const shuffledarray = duplicatcharacter.sort( () => Math.random() -0.5 );

    shuffledarray.forEach((character) => {

        const card = creatcard(character);
        grid.appendChild(card);
    })
}

const starttimer = () => {

   this.loop = setInterval(() => {
    const correnttimer = Number(timer.innerHTML);
    timer.innerHTML = correnttimer + 1;

   }, 1000);

}

window.onload = () => {
    spanplayer.innerHTML = localStorage.getItem('player');
    starttimer();
    loadgame();

}




