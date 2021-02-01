
// Projects grid - image darken on hover

const portfolioItems = document.querySelectorAll(".portfolio-item-wrapper");

portfolioItems.forEach((portfolioItem) => {
  portfolioItem.addEventListener("mouseover", () => {
    portfolioItem.childNodes[1].classList.add("img-darken");
  });

  portfolioItem.addEventListener("mouseout", () => {
    portfolioItem.childNodes[1].classList.remove("img-darken");
  });
});

// Hero Text animation
const text = document.querySelector(".hero-text");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";


for (let i=0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 150);

function onTick() {
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}


