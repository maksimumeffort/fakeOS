// DOM elements

// init
const bodyMain = document.querySelector("body");
const blinker = document.querySelector(".blinker");
const startDiv = document.querySelector(".start-div");
const startWallpaper = document.querySelector(".wallpaper-container");
// login
const loginModal = document.querySelector(".login-div__modal");
const loginWindow = document.querySelector(".login-div");
const loginForm = document.querySelector(".login-div__layout--form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const loginJingle = new Audio("./assets/sounds/win95-startup.mp3");

// initial screen
// blinker
const showHide = (element, time, type, value) => {
  window.setTimeout(() => {
    element.style[type] = value;
  }, time);
};

const initiate = () => {
  window.setInterval(() => {
    const visibility = blinker.style.visibility;
    visibility == "hidden"
      ? (blinker.style.visibility = "visible")
      : (blinker.style.visibility = "hidden");
  }, 400);

  showHide(startDiv, 5000, "display", "none");

  showHide(startWallpaper, 6000, "display", "block");

  showHide(startWallpaper, 6000, "display", "none");

  // window.setTimeout(() => {
  //   bodyMain.removeChild(startWallpaper);
  // }, 5000);

  window.setTimeout(() => {
    loginModal.style.display = "block";
    bodyMain.classList.toggle("body-green");
  }, 6000);
};

initiate();

// play login jingle

// user login function
const login = () => {
  showHide(loginWindow, 1000, "display", "none");
  console.log(bodyMain);
  // background.style.backgroundColor = "008081";

  loginJingle.play();
  // startWallpaper.src = "./";
  // console.dir(startWallpaper);
  // loginWindow.style.display = "none";
};

// Login validation
const passKey = "maksimumeffort";

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (usernameInput.value === passKey && passwordInput.value === passKey) {
    login();
  } else {
    passwordInput.classList.toggle("error");
  }
});
