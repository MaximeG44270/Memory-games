const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let compteur = 0;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    compteur++;
    document.querySelector('#compteur').textContent = Math.ceil(compteur / 2);

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    checkForMatch();
}
function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        return;
    }
    unflipCards();
}
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;
    });
}
function restartGame() {
    shuffle();
    resetBoard();
    compteur = 0;
    document.querySelector('#compteur').textContent = compteur;
    cards.forEach(card => {
        card.classList.remove('flip');
    });
    cards.forEach(card => card.addEventListener('click', flipCard));
}

shuffle();
cards.forEach(card => card.addEventListener('click', flipCard));
document.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
        restartGame();
    }
});