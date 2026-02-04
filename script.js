const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

/* No button text stages */
const noTexts = [
  "No",
  "Really?",
  "Try again!",
  "You sure?",
  "Haha nice try!",
  "No escape!",
  "Nice Try 😠",
  "You can't escape love 💖"
];

let noIndex = 0;

/* Move NO button on TOUCH */
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

function moveNoButton(e) {
  e.preventDefault();

  if (noIndex < noTexts.length - 1) {
    noIndex++;
    noBtn.textContent = noTexts[noIndex];
  }

  const padding = 20;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

/* YES button */
yesBtn.addEventListener("click", () => {
  popConfetti();

  setTimeout(() => {
    document.body.innerHTML = `
      <h1 style="
        text-align:center;
        margin-top:40vh;
        font-size:30px;
        color:#ff4d6d;">
        Yay! ❤️🥰<br>
        I knew you'd say yes! 💖
      </h1>
    `;
  }, 1200);
});

/* Confetti */
function popConfetti() {
  const colors = ["#ff4d6d", "#ffd166", "#ff9a9e", "#ffb703"];

  for (let i = 0; i < 90; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration =
      Math.random() * 2 + 2 + "s";

    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}
