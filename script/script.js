// -------- TARGET --------
const navItmes = document.querySelectorAll("nav .menuitems ul li a");
const menuitemsContainer = document.getElementsByClassName("menuitems")[0];
const open_btn = document.getElementById("open-btn");
const close_btn = document.getElementById("close-btn");
// ---------------------------------------
for (const item of navItmes) {
  const pathname = document.location.href;
  const link_pathname = item.href;
  if (link_pathname == pathname) {
    item.classList.add("active");
  }
}

open_btn.addEventListener("click", openNav);
close_btn.addEventListener("click", closeNav);

// ---------- FUNCTIONS --------

function openNav() {
  menuitemsContainer.classList.remove("animate__fadeOutRight");

  menuitemsContainer.classList.add("animate__fadeInRight");
}
function closeNav(e) {
  e.preventDefault();
  menuitemsContainer.classList.add("animate__fadeOutRight");

  setTimeout(() => {
    menuitemsContainer.classList.remove("animate__fadeInRight");
  }, 1000);
}
