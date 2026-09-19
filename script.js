document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const button = document.querySelector(".button");

  if (button) {
    button.addEventListener("click", () => {
      document.querySelector("#message")?.scrollIntoView({
        behavior: "smooth"
      });
    });
  }
});
