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
const clicker = new Audio("./assets/sounds/mouse-click.mp3");
// desktop
const timeNow = document.querySelector(".time-now");
const startButton = document.querySelector(".start-btn");
const desktopIconsContainer = document.querySelector(
  ".desktop__container--icons-container"
);

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

// initiate();

// click sound
const clickSound = () => {
  clicker.play();
};

// user login function
const login = () => {
  showHide(loginWindow, 1000, "display", "none");
  // console.log(bodyMain);
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

// Desktop
// const todayDate = new Date();
// time function
const today = new Date();

const time = today.toLocaleTimeString("en-AU", {
  hour: "2-digit",
  minute: "2-digit",
});
const upperCaseAmPM = time.split(" ")[1].toUpperCase();
const newTime = `${time.split(" ")[0]} ${time.split(" ")[1].toUpperCase()}`;

timeNow.innerHTML = `${newTime}`;

startButton.addEventListener("click", (event) => {
  clickSound();
  console.log("start button clicked");
});
const desktopItems = [];
const desktopIconNames = {
  // Desktop icons - [my computer, network neighbourhood, inbox, recycle bin, the internet, MSN, my briefcase]
  myComputer: "my-computer",
  networkNeighbourhood: "network-neighbourhood",
  inbox: "inbox",
  recycleBin: "recycle-empty",
  theInternet: "the-internet",
  msn: "the-microsoft-network",
  myBriefcase: "my-briefcase",
};

const desktopIcons = Object.entries(desktopIconNames).forEach((entry) => {
  const newElement = document.createElement("button");
  const newElementImage = document.createElement("img");
  const newElementText = document.createElement("p");
  const textToPut = entry[1]
    .split("-")
    .map((el) => el[0].toUpperCase() + el.substring(1))
    .join(" ");
  newElement.id = entry[0];
  newElement.className = "desktop-icon";
  newElementImage.className = "desktop-icon__img";
  newElementText.className = "desktop-icon__text";

  newElementText.innerHTML = textToPut;
  newElementImage.src = `./assets/icons/${entry[1]}.ico`;
  newElement.appendChild(newElementImage);
  newElement.appendChild(newElementText);
  desktopIconsContainer.appendChild(newElement);
});
