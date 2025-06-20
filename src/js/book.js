document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const packageSelect = document.getElementById("package");

  const hintPopup = document.getElementById("hint-popup");
  const packageModal = document.getElementById("package-modal");

  function showHint(input, message) {
    const rect = input.getBoundingClientRect();
    hintPopup.textContent = message;
    hintPopup.style.top = `${rect.bottom + window.scrollY + 5}px`;
    hintPopup.style.left = `${rect.left + window.scrollX}px`;
    hintPopup.classList.remove("hidden");
    hintPopup.style.opacity = 1;

    setTimeout(() => {
      hintPopup.style.opacity = 0;
      setTimeout(() => hintPopup.classList.add("hidden"), 500);
    }, 3500);
  }

  nameInput.addEventListener("focus", () => {
    showHint(nameInput, "Enter your full name, e.g. John Doe.");
  });

  emailInput.addEventListener("focus", () => {
    showHint(emailInput, "Use a valid email, e.g. john@example.com.");
  });

  packageSelect.addEventListener("change", () => {
    const value = packageSelect.value;
    let message = "";

    switch (value) {
      case "1":
        message = "You selected 1 session/week for $40 USD.";
        break;
      case "2":
        message = "You selected 2 sessions/week for $70 USD.";
        break;
      case "4":
        message = "You selected 4 sessions/week for $140 USD.";
        break;
    }

    packageModal.textContent = message;
    packageModal.classList.remove("hidden");

    setTimeout(() => {
      packageModal.classList.add("hidden");
    }, 5000);
  });
});
