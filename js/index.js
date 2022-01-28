const prevScrolling = document.querySelector("body");
const closeBtn = document.querySelector(".closebtn");
const openBtn = document.querySelector(".openbtn");

openBtn.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "250px";
  prevScrolling.style.overflowY = "hidden";
});

closeBtn.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "0";
  prevScrolling.style.overflowY = "scroll";
});
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 32 && e.target === document.body) {
    e.preventDefault();
  }
});
