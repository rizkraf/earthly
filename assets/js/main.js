// Mobile Menu Toggle

const navToggle = document.querySelector(".toggle");
const navList = document.querySelector(".nav-list");
navToggle.addEventListener("click", function () {
  navList.classList.toggle("visible");
});

// Scroll to ID Function

const navs = document.querySelectorAll(".nav-item");
const explore = document.querySelector(".landing-button");

for (let nav of navs) {
  nav.addEventListener("click", function (event) {
    const target = event.target;

    const about = document.getElementById("about");
    const facts = document.getElementById("facts");
    const gallery = document.getElementById("gallery");

    if (target.innerHTML === "Home") {
      document.documentElement.scrollTop = 0;
    } else if (target.innerHTML === "About") {
      about.scrollIntoView();
    } else if (target.innerHTML === "Facts") {
      facts.scrollIntoView();
    } else if (target.innerHTML === "Gallery") {
      gallery.scrollIntoView();
    }
  });
}

explore.addEventListener("click", function (event) {
  const content = document.getElementById("content");
  content.scrollIntoView();
});

// Facts Slider Function

const textFact = document.querySelector(".text-fact");
const titleFact = document.querySelector(".title-fact");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const fact = [
  {
    title: "Fact 1",
    text: `A day on Earth is 24 hours. Earth makes a complete orbit around the sun (a year in Earth time) in about 365 days.`,
  },
  {
    title: "Fact 2",
    text: `Earth is a rocky planet with a solid and dynamic surface of mountains, canyons, plains and more. Most of our planet is covered in water.`,
  },
  {
    title: "Fact 3",
    text: `Our atmosphere protects us from incoming meteoroids, most of which break up in our atmosphere before they can strike the surface.`,
  },
];

let currentText = 0;

titleFact.innerText = fact[currentText].title;
textFact.innerText = fact[currentText].text;

next.addEventListener("click", function (event) {
  target = event.target;

  if (currentText >= fact.length - 1) {
    currentText = 0;
    titleFact.innerText = fact[currentText].title;
    textFact.innerText = fact[currentText].text;
  } else {
    currentText += 1;
    titleFact.innerText = fact[currentText].title;
    textFact.innerText = fact[currentText].text;
  }
});

prev.addEventListener("click", function (event) {
  target = event.target;

  if (currentText <= 0) {
    currentText = fact.length - 1;
    titleFact.innerText = fact[currentText].title;
    textFact.innerText = fact[currentText].text;
  } else {
    currentText -= 1;
    titleFact.innerText = fact[currentText].title;
    textFact.innerText = fact[currentText].text;
  }
});
