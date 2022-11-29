// imports
import {
  bodyMain,
  startWrapper,
  blinker,
  startDiv,
  allButtons,
  loginWrapper,
  loginWindow,
  loginForm,
  usernameInput,
  passwordInput,
  loginJingle,
  clicker,
  desktopWrapper,
  timeNow,
  startButton,
  desktopIconsContainer,
  startModal,
  menuIconsContainer,
} from "./dom.js";

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

  // TODO: briefly show body background image before login screen
  // showHide(startWallpaper, 6000, "display", "block");

  window.setTimeout(() => {
    startWrapper.style.zIndex = -1;
    loginWrapper.style.zIndex = 100;
  }, 6000);
};

initiate();

// click sound
const clickSound = () => {
  clicker.play();
};

// user login function
const login = () => {
  showHide(loginWindow, 1000, "display", "none");
  loginWrapper.style.zIndex = -1;

  loginJingle.play();

  desktopWrapper.style.zIndex = 100;
};

// btn click

// x-button
// TODO2: write function to shut down display

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
// time function
const today = new Date();

const time = today.toLocaleTimeString("en-AU", {
  hour: "2-digit",
  minute: "2-digit",
});
const upperCaseAmPM = time.split(" ")[1].toUpperCase();
const newTime = `${time.split(" ")[0]} ${time.split(" ")[1].toUpperCase()}`;

timeNow.innerHTML = `${newTime}`;

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

// Start Menu

const toggleMenu = () => {
  // let z = startModal.style.zIndex;
  if (startModal.style.zIndex != 101) {
    console.log("executing");
    startModal.style.zIndex = 101;
  } else {
    startModal.style.zIndex = 99;
  }
};

startButton.addEventListener("click", (event) => {
  clickSound();

  console.log(startModal);
  toggleMenu();
});

const menuIconNames = {
  //  startMenu - [ programs, documents, settings, find, help, run, suspend, shut down…]
  programs: "programs",
  documents: "documents",
  settings: "settings",
  find: "find",
  help: "help",
  run: "run",
  suspend: "suspend",
  shutDown: "shut-down",
};

const menuIcons = Object.entries(menuIconNames).forEach((entry) => {
  const newElement = document.createElement("button");
  const newElementImage = document.createElement("img");
  const newElementText = document.createElement("p");
  const textToPut = entry[1]
    .split("-")
    .map((el) => el[0].toUpperCase() + el.substring(1))
    .join(" ");
  newElement.id = entry[0];
  newElement.className = "menu-icon";
  newElementImage.className = "menu-icon__img";
  newElementText.className = "menu-icon__text";

  newElementText.innerHTML = textToPut;
  newElementImage.src = `./assets/icons/${entry[1]}.ico`;
  newElement.appendChild(newElementImage);
  newElement.appendChild(newElementText);
  menuIconsContainer.appendChild(newElement);
});
