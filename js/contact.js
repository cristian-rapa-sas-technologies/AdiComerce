var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);

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
