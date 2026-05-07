const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");
const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const envelopeScene = document.getElementById("envelopeScene");
const message = document.getElementById("message");
const galleryBtn = document.getElementById("galleryBtn");
const gallery = document.getElementById("gallery");
const finalBtn = document.getElementById("finalBtn");
const finalScreen = document.getElementById("finalScreen");
const song = document.getElementById("song");
const heartsContainer = document.querySelector(".heart-bubbles");

const paragraphs = [
  "Canım annem,",
  "Uzakta olsam da kalbim her zaman seninle.",
  "Her yıl sana uzaktan çiçek gönderiyorum ama bu yıl sana kendi emeğimle küçük bir sürpriz hazırlamak istedim.",
  "Bana verdiğin sevgi, sabır ve emek için ne kadar teşekkür etsem az.",
  "Sen benim en güvenli yerim, en büyük şansım ve en güzel iyikimsin.",
  "Anneler Günün kutlu olsun. Seni çok seviyorum. 💗",
];

let hasOpened = false;

startBtn.addEventListener("click", () => {
  intro.classList.add("leave");

  setTimeout(() => {
    intro.classList.add("hidden");
    envelopeScene.classList.remove("hidden");
  }, 900);
});

openBtn.addEventListener("click", async () => {
  if (hasOpened) return;
  hasOpened = true;

  envelope.classList.add("open");

  song.currentTime = 0;
  song.volume = 0.75;
  song.play().catch(() => {});

  setTimeout(() => {
    typeParagraphs(paragraphs);
  }, 1900);
});

async function typeParagraphs(list) {
  message.textContent = "";

  for (let p = 0; p < list.length; p++) {
    await typeText(list[p]);
    message.textContent += "\n\n";
    await wait(750);
  }

  setTimeout(() => {
    galleryBtn.classList.remove("hidden");
  }, 700);
}

function typeText(content) {
  return new Promise((resolve) => {
    let index = 0;

    const interval = setInterval(() => {
      message.textContent += content[index];
      index++;

      if (index >= content.length) {
        clearInterval(interval);
        resolve();
      }
    }, 80);
  });
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

galleryBtn.addEventListener("click", () => {
  envelopeScene.classList.add("leave");

  setTimeout(() => {
    envelopeScene.style.display = "none";
    gallery.classList.remove("hidden");
    revealPhotosOneByOne();
  }, 1600);
});

function revealPhotosOneByOne() {
  const cards = document.querySelectorAll(".photo-card");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 650);
  });

  setTimeout(
    () => {
      finalBtn.classList.add("show");
    },
    cards.length * 650 + 800,
  );
}

finalBtn.addEventListener("click", () => {
  gallery.classList.add("hidden");
  finalScreen.classList.remove("hidden");
});

function createHeartBubble() {
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = Math.random() > 0.5 ? "💗" : "💕";
  bubble.style.top = Math.random() * 90 + "vh";
  bubble.style.animationDuration = 7 + Math.random() * 6 + "s";
  bubble.style.fontSize = 20 + Math.random() * 26 + "px";

  heartsContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 13000);
}

setInterval(createHeartBubble, 500);
