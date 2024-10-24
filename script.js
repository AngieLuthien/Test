const ghost = document.getElementById('ghost');

ghost.addEventListener('click', () => {
    // Aggiungiamo la classe per l'animazione del movimento
    ghost.style.transform = 'translateY(-20px)';

    // Ritorniamo il fantasma alla posizione originale dopo 300ms
    setTimeout(() => {
        ghost.style.transform = 'translateY(0)';
    }, 300);
});
