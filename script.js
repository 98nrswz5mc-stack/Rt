const menuButton = document.getElementById("menuButton");
const menuPanel = document.getElementById("menuPanel");
const menuClose = document.getElementById("menuClose");
if (menuButton && menuPanel) {
  menuButton.addEventListener("click", () => menuPanel.classList.add("open"));
}
if (menuClose && menuPanel) {
  menuClose.addEventListener("click", () => menuPanel.classList.remove("open"));
}
document.addEventListener("click", (event) => {
  if (menuPanel && menuPanel.classList.contains("open") &&
      !menuPanel.contains(event.target) && !menuButton.contains(event.target)) {
    menuPanel.classList.remove("open");
  }
});
const blankButton = document.getElementById("blankButton");
if (blankButton) {
  blankButton.addEventListener("click", () => {
    alert("Бланк ответов в этом личном макете не сохранён.");
  });
}
