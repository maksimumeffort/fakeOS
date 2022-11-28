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
