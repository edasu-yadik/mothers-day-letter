const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");
const envelopeScene = document.getElementById("envelopeScene");
const envelopeWrapper = document.getElementById("envelopeWrapper");
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const message = document.getElementById("message");
const memoryBtn = document.getElementById("memoryBtn");
const memoryScene = document.getElementById("memoryScene");
const carousel = document.getElementById("carousel");
const finalScene = document.getElementById("finalScene");
const song = document.getElementById("song");
const heartLayer = document.getElementById("heartLayer");

const letterText = `Canım annem,

Uzakta olsam da kalbim her zaman seninle.

Her yıl sana uzaktan çiçek gönderiyorum ama bu yıl sana kendi emeğimle küçük bir sürpriz hazırlamak istedim.

Bana verdiğin sevgi, sabır ve emek için ne kadar teşekkür etsem az.

Sen benim en güvenli yerim, en büyük şansım ve en güzel iyikimsin.

Anneler Günün kutlu olsun. Seni çok seviyorum. 💗`;

let opened = false;

startBtn.addEventListener("click", () => {
  intro.classList.add("leave");

  setTimeout(() => {
    intro.classList.add("hidden");
    envelopeScene.classList.remove("hidden");
  }, 900);
});

openBtn.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  envelope.classList.add("open");

  song.currentTime = 0;
  song.volume = 0.75;
  song.play().catch(() => {});

  setTimeout(() => {
    typeLetter(letterText);
  }, 1900);
});

function typeLetter(text) {
  message.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    message.textContent += text[i];
    i++;

    if (i >= text.length) {
      clearInterval(interval);

      setTimeout(() => {
        memoryBtn.classList.remove("hidden");
      }, 900);
    }
  }, 75);
}

memoryBtn.addEventListener("click", () => {
  envelopeWrapper.classList.add("leave");

  setTimeout(() => {
    envelopeScene.classList.add("hidden");
    memoryScene.classList.remove("hidden");
    startMemorySequence();
  }, 1500);
});

function startMemorySequence() {
  setTimeout(() => {
    memoryScene.classList.add("grid-mode");
  }, 18500);

  setTimeout(() => {
    memoryScene.classList.add("fade-out");
  }, 25500);

  setTimeout(() => {
    memoryScene.classList.add("hidden");
    finalScene.classList.remove("hidden");
  }, 26800);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.5 ? "💗" : "💕";

  heart.style.top = Math.random() * 95 + "vh";
  heart.style.animationDuration = 7 + Math.random() * 7 + "s";
  heart.style.fontSize = 18 + Math.random() * 28 + "px";

  heartLayer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 14000);
}

setInterval(createHeart, 450);
