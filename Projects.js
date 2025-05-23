document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-button");
  const sideMenu = document.getElementById("sideMenu");
  const closeBtn = document.getElementById("closeMenu");
  const overlay = document.getElementById("overlay");

  menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("open");
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("open");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", () => {
    sideMenu.classList.remove("open");
    overlay.classList.remove("active");
  });
});

