const form = document.getElementById("form");
const emailInputBtnEl = document.getElementById("email-input");
const errorBtnLabelEl = document.getElementById("email-error-label");
const emailPattern = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target));
  console.log("button clicked");
  if (!data.email) {
    errorBtnLabelEl.classList.remove("hidden");
    emailInputBtnEl.classList.add(
      "bg-input-text-error-bg",
      "border-error-text",
      "text-error-text",
    );
  }
});
