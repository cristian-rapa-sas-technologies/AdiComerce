const dataBorder = document.querySelector(".data-border");
const first = document.querySelector(".st");
const second = document.querySelector(".sec");
const third = document.querySelector(".th");
const forth = document.querySelector(".forth");
const specifications = document.querySelector(
  ".product-pic-about-specifications"
);
const pay = (document = document.querySelector(".product-pic-about-pay"));
const methods = (document = document.querySelector(
  ".product-pic-about-methods"
));

first.addEventListener("click", () => {
  first.classList.remove("desc");
  second.classList.remove("plicy");
  third.classList.remove("pay");
  specifications.classList.remove("remove");
  pay.classList.remove("show");
  methods.classList.remove("delivery");
});
second.addEventListener("click", () => {
  first.classList.add("desc");
  second.classList.add("plicy");
  third.classList.remove("pay");
  specifications.classList.add("remove");
  pay.classList.add("show");
  methods.classList.remove("delivery");
});

third.addEventListener("click", (e) => {
  first.classList.add("desc");
  second.classList.remove("plicy");
  third.classList.add("pay");
  specifications.classList.add("remove");
  pay.classList.remove("show");
  methods.classList.add("delivery");
});

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
