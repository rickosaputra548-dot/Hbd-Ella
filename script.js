let isPlaying = false;
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("musicBtn");

function toggleMusic() {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = "🔊 Nyalakan Musik";
  } else {
    music.play();
    musicBtn.textContent = "🔈 Matikan Musik";
  }
  isPlaying = !isPlaying;
}

function openImage(src) {
  const popup = document.getElementById("popup");
  const img = document.getElementById("popup-img");
  img.src = src;
  popup.style.display = "flex";
}

function closeImage() {
  document.getElementById("popup").style.display = "none";
}

// Game Tebak Angka
let score = 0;
let target = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  const result = document.getElementById("game-result");
  if (guess === target) {
    score++;
    document.getElementById("score").textContent = score;
    result.textContent = "Yess akhirnya bener!! selamat ulang tahun ya!! aku doain yg terbaik buat kamu. Semoga panjang umur, tambah cantik, tambah pro vd, aura +++, makin baik, jadi orang keren, dan GBU. Apapun yg baik semoga ke kamu semua, dan pastinya yg jahat jauh dari kamu. :>";
    result.style.color = "green";
    target = Math.floor(Math.random() * 10) + 1;
  } else {
    result.textContent = guess > target ? "Terlalu besar woip! 😹" : "Terlalu kecil kocak 🤭";
    result.style.color = "red";
  }
}

// Confetti
function showConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = Array.from({ length: 100 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 10 + 5,
    color: `hsl(${Math.random() * 360}, 100%, 60%)`
  }));

  let angle = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    angle += 0.01;
    confetti.forEach(c => {
      c.y += Math.cos(angle + c.d) + 1 + c.r / 2;
      c.x += Math.sin(angle) * 2;

      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }

      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
      ctx.fillStyle = c.color;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  draw();
}
