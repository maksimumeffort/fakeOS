// initial screen
// blinker
const blinker = document.querySelector(".blinker");
const startDiv = document.querySelector(".start-div");
const startWallpaper = document.querySelector(".start-screen__wallpaper");

const initiate = () => {
  window.setInterval(() => {
    const visibility = blinker.style.visibility;
    visibility == "hidden"
      ? (blinker.style.visibility = "visible")
      : (blinker.style.visibility = "hidden");
  }, 400);

  window.setTimeout(() => {
    startDiv.style.display = "none";
  }, 5000);

  window.setTimeout(() => {
    startWallpaper.style.display = "block";
  }, 6000);
};

// initiate();

// Login validation
const passKey = "maksimumeffort";
const loginForm = document.querySelector(".login-div__layout--form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (usernameInput.value === passKey && passwordInput.value === passKey) {
    console.log("log in successful");
  } else {
    console.log("incorrect login");
  }
});
