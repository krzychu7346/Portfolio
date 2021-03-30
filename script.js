let nav = document.querySelector("nav");
let navButton = nav.querySelector(".nav-icon-mobile");
let navLinks = nav.querySelector(".nav-links");
let links = navLinks.querySelectorAll("li");

let bodyOverflow = document.querySelector("body");

function open() {
  nav.classList.toggle("open");
  // navLinks.classList.toggle("open");
  navButton.classList.toggle("nav-mobile-button-open");
  bodyOverflow.style.overflowY = "hidden";
}

function close() {
  nav.classList.remove("open");
  navButton.classList.remove("nav-mobile-button-open");
  bodyOverflow.style.overflowY = "auto";
  console.log("close");
}

navButton.addEventListener("click", () => {
  open();

  //  Chooses li and closes ul
  if (nav.classList[1] == "open") {
    navLinks.addEventListener("click", close, { once: true });
  } else {
    close();
  }
});

