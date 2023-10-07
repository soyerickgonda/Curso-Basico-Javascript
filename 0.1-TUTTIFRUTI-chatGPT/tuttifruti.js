document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const letterDisplay = document.getElementById("letter-display");
    const categoriesList = document.getElementById("categories-list");
    const wordInput = document.getElementById("word-input");
    const submitButton = document.getElementById("submit-button");
    const timerDisplay = document.getElementById("timer");
    const approvedWordsList = document.getElementById("approved-words");

    let timer;
    let secondsRemaining = 60;
    let currentLetter = "";
    let categories = ["Animal", "Fruta", "Ciudad", "Color", "Nombre"];
    let approvedWords = [];

    function generateRandomLetter() {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    function startGame() {
        currentLetter = generateRandomLetter();
        letterDisplay.textContent = "Letra actual: " + currentLetter;
        categoriesList.innerHTML = "";
        approvedWords = [];
        approvedWordsList.innerHTML = "";
        secondsRemaining = 60;
        timerDisplay.textContent = secondsRemaining;
        wordInput.value = "";
        startButton.disabled = true;
        submitButton.disabled = false;
        wordInput.disabled = false;
        wordInput.focus();
        timer = setInterval(function () {
            secondsRemaining--;
            timerDisplay.textContent = secondsRemaining;
            if (secondsRemaining === 0) {
                clearInterval(timer);
                endGame();
            }
        }, 1000);
    }

    function endGame() {
        submitButton.disabled = true;
        wordInput.disabled = true;
        startButton.disabled = false;
        alert("Juego terminado. Palabras aprobadas: " + approvedWords.join(", "));
    }

    function submitWord() {
        const word = wordInput.value.trim();
        if (word.length === 0) {
            alert("Por favor, ingresa una palabra.");
            return;
        }
        if (approvedWords.includes(word)) {
            alert("Ya has ingresado esta palabra.");
            return;
        }
        approvedWords.push(word);
        const li = document.createElement("li");
        li.textContent = word;
        approvedWordsList.appendChild(li);
        wordInput.value = "";
    }

    startButton.addEventListener("click", startGame);
    submitButton.addEventListener("click", submitWord);
});
