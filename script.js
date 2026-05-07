const openBtn = document.getElementById("openBtn");
const envelope = document.querySelector(".envelope");
const typedText = document.getElementById("typedText");
const memoryBtn = document.getElementById("memoryBtn");
const gallery = document.getElementById("gallery");
const envelopeWrapper = document.getElementById("envelopeWrapper");
const bgMusic = document.getElementById("bgMusic");
const finalBtn = document.getElementById("finalBtn");
const finalSection = document.getElementById("finalSection");

const message = `
Canım annem,

Uzakta olsam bile kalbim hep seninle.

Senin sevgin bana her zaman güç verdi.
Hayatım boyunca bana verdiğin emekleri,
sevgiyi ve desteği hiçbir zaman unutmayacağım.

İyi ki varsın.
İyi ki benim annemsin.

Anneler günün kutlu olsun 💖
`;

openBtn.addEventListener("click", () => {

  envelope.classList.add("open");

  bgMusic.play();

  setTimeout(() => {
    typeMessage(message);
  }, 1800);

});

function typeMessage(text){

  let index = 0;

  const interval = setInterval(() => {

    typedText.textContent += text[index];

    index++;

    if(index >= text.length){

      clearInterval(interval);

      memoryBtn.classList.remove("hidden");
    }

  }, 60);

}

/* ANILAR */

memoryBtn.addEventListener("click", () => {

  envelopeWrapper.style.transition = "2s";
  envelopeWrapper.style.opacity = "0";
  envelopeWrapper.style.transform = "translateY(-300px) scale(.3)";

  setTimeout(() => {

    document.querySelector(".hero").style.display = "none";

    gallery.classList.remove("hidden");

    revealPhotosOneByOne();

  }, 2000);

});

function revealPhotosOneByOne(){

  const photos = [
    {
      src:"images/photos/photo1.jpg",
      text:"En güzel anılarımızdan biri 💖"
    },
    {
      src:"images/photos/photo2.jpg",
      text:"Uzakta olsam da hep yanımdasın 🌸"
    },
    {
      src:"images/photos/photo3.jpg",
      text:"Gülüşün bana güç veriyor ✨"
    },
    {
      src:"images/photos/photo4.jpg",
      text:"İyi ki benim annemsin 💕"
    },
    {
      src:"images/photos/photo5.jpg",
      text:"Sen benim en güvenli yerimsin 💌"
    },
    {
      src:"images/photos/photo6.jpg",
      text:"Kalbim hep seninle anne 💗"
    }
  ];

  const slideCard = document.querySelector(".slide-card");
  const slideImage = document.getElementById("slideImage");
  const slideText = document.getElementById("slideText");

  let index = 0;

  const interval = setInterval(() => {

    index++;

    if(index >= photos.length){

      clearInterval(interval);

      setTimeout(() => {
        finalBtn.classList.remove("hidden");
      },1000);

      return;
    }

    slideCard.classList.remove("change");
    void slideCard.offsetWidth;

    slideImage.src = photos[index].src;
    slideText.textContent = photos[index].text;

    slideCard.classList.add("change");

  },3000);

}

/* FINAL */

finalBtn.addEventListener("click", () => {

  gallery.style.display = "none";

  finalSection.classList.remove("hidden");

});
