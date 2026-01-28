const addNewButton = document.getElementById("addNewButton");
const addNewMenu = document.getElementById("addNewMenu");

const closeMenu = () => {
  addNewMenu.classList.remove("open");
  addNewMenu.setAttribute("aria-hidden", "true");
};

addNewButton.addEventListener("click", () => {
  const isOpen = addNewMenu.classList.toggle("open");
  addNewMenu.setAttribute("aria-hidden", String(!isOpen));
});

document.addEventListener("click", (event) => {
  if (!addNewMenu.contains(event.target) && !addNewButton.contains(event.target)) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
