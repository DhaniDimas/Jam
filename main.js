setInterval(() => {
  let date = new Date();
  let clock = document.getElementById("clock");
  clock.innerHTML = (date.getHours() < 10 ? "0" : "") + date.getHours() + ":" + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes() + ":" + (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
}, 100);
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    $("body").addClass("loaded");
  }, 800);
});
