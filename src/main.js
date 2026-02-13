const form = document.getElementById("form");
const submitBtnEl = document.getElementById("submit-btn");
const emailInputBtnEl = document.getElementById("email-input");
const errorBtnLabelEl = document.getElementById("email-error-label");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target));
  console.log("button clicked");
  if (!data.email || !emailPattern.test(data.email)) {
    errorBtnLabelEl.classList.remove("hidden");
    emailInputBtnEl.classList.add(
      "bg-input-text-error-bg",
      "border-error-text",
      "text-error-text",
    );
  }
});

document.addEventListener("input", () => {
  if (emailPattern.test(emailInputBtnEl.value)) {
    submitBtnEl.style.backgroundImage =
      "linear-gradient(to right, #ff6a3d, #ff527b)";
  } else {
    submitBtnEl.style.backgroundImage = "";
  }
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest("#submit-btn");

  if (!btn) {
    errorBtnLabelEl.classList.add("hidden");
    emailInputBtnEl.classList.remove(
      "bg-input-text-error-bg",
      "border-error-text",
      "text-error-text",
    );
  }
});
