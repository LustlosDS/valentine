const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");

function startMusic() {
  music.play();
}

function moveButton() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  yesBtn.style.transform = "scale(1.15)";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function yesClicked() {
  document.body.innerHTML = `
  <h1 style="color:white;font-size:30px;padding:20px;">
  Danke, dass du mein Valentin bist Philipp 💖<br><br>
  Ich liebe dich!<br><br>
  Deine Melanie 💋
  </h1>`;

  document.body.style.background = "linear-gradient(135deg, #ff4d6d, #ff99ac)";

  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(heart);
  }
}
