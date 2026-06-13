const box = document.getElementById("box");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const gameOverText = document.getElementById("gameOver");

let score = 0;
let timeLeft = 30;

moveBox();

box.addEventListener("click", () => {
    score++;
    scoreText.innerText = score;
    moveBox();
});

function moveBox() {
    const gameArea = document.getElementById("gameArea");

    const maxX = gameArea.clientWidth - 50;
    const maxY = gameArea.clientHeight - 50;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    box.style.left = randomX + "px";
    box.style.top = randomY + "px";
}

const timer = setInterval(() => {
    timeLeft--;
    timeText.innerText = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timer);
        box.style.display = "none";
        gameOverText.innerHTML =
            `Game Over! 🎉 Final Score: ${score}`;
    }
}, 1000);