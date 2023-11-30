const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");
const prefersDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  toggleSwitch.checked = currentTheme === "dark";
} else {
  document.documentElement.setAttribute(
    "data-theme",
    prefersDarkMode ? "dark" : "light"
  );
  toggleSwitch.checked = prefersDarkMode;
}

function switchTheme(e) {
  console.log("lol");
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
//for feather icons to work
feather.replace();

// enlarge the highlighter under dark mode slider.
//implemented because a problem within html hierarchy
const slider = document.querySelector(".slider");

const oval = document.querySelector(".oval");

slider.addEventListener("mouseover", () => {
  oval.classList.toggle("alt");
});

slider.addEventListener("mouseout", () => {
  oval.classList.toggle("alt");
});
