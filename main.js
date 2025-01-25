AOS.init({
  duration: 1000,
  once: false,
});

lightModeButton = document.querySelector(".lightmode");
darkModeButton = document.querySelector(".darkmode");
backtopButton = document.querySelector(".backtop-button");

lightModeButton.style.display = "none";

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  lightModeButton.style.display = "block";
  darkModeButton.style.display = "none";
});

lightModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  lightModeButton.style.display = "none";
  darkModeButton.style.display = "block";
});

backtopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
