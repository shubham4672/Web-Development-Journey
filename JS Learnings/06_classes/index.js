const menuClicked = (currEl) => {
  const menuItems = document.getElementsByClassName("hover");
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("active");
  }
  currEl.classList.add("active");
};
