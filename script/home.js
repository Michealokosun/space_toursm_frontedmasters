const home_explore = document.getElementById("home_explore");

home_explore.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "destination.html"; // Navigate after fade-out
  }, 100);
});
