import { debounce, checkDuplicateEmail } from './utils/validation.js';

// API 3: Zona horaria – definida afuera, llamada adentro
function showUserTimezoneBanner() {
  const banner = document.getElementById("timezone-banner");

  fetch("http://ip-api.com/json/")
    .then(res => res.json())
    .then(data => {
      const { city, country, timezone } = data;
      banner.innerHTML = `🌐 <strong>${city}, ${country}</strong> | Your Timezone: <strong>${timezone}</strong>`;
      banner.classList.remove("hidden");
      banner.classList.add("slide-in");
    })
    .catch(() => {
      banner.innerHTML = `🌐 Location unavailable`;
      banner.classList.remove("hidden");
      banner.classList.add("slide-in");
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const packageSelect = document.getElementById("package");
  const form = document.getElementById("booking-form");
  const dateInput = document.querySelector('input[type="date"]');

  const hintPopup = document.getElementById("hint-popup");
  const packageModal = document.getElementById("package-modal");

  // Hints
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

  // Modal
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
        message = "You selected 3 sessions/week for $140 USD.";
        break;
    }

    packageModal.textContent = message;
    packageModal.classList.remove("hidden");

    setTimeout(() => {
      packageModal.classList.add("hidden");
    }, 5000);
  });

  // API 1: Chuck Norris Joke
  fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(data => {
      const quote = `"${data.value}" — Chuck Norris API`;
      const quoteHTML = `<div class="quote-box">${quote}</div>`;
      const container = document.querySelector(".booking-card");
      if (container) {
        container.insertAdjacentHTML("beforeend", quoteHTML);
      }
    })
    .catch(error => {
      console.error("Error fetching joke:", error);
    });

  // LocalStorage preload
  const savedName = localStorage.getItem("name");
  const savedEmail = localStorage.getItem("email");
  const savedPackage = localStorage.getItem("package");

  if (savedName) nameInput.value = savedName;
  if (savedEmail) emailInput.value = savedEmail;
  if (savedPackage) packageSelect.value = savedPackage;

  // ✅ Ejemplo 1: Validación avanzada de email con debounce
  emailInput.addEventListener("input", debounce(() => {
    const isDuplicate = checkDuplicateEmail(emailInput.value);
    if (isDuplicate) {
      showHint(emailInput, "This email already has a booking.");
      emailInput.style.border = "2px solid red";
    } else {
      emailInput.style.border = "2px solid green";
    }
  }));

  // ✅ Ejemplo 2: Validación de fechas ocupadas
  const unavailableDates = ["2025-07-01", "2025-07-04", "2025-07-10"];
  dateInput.addEventListener("change", () => {
    const selectedDate = dateInput.value;
    if (unavailableDates.includes(selectedDate)) {
      showHint(dateInput, "This date is fully booked. Choose another.");
      dateInput.style.border = "2px solid red";
      dateInput.value = "";
    } else {
      dateInput.style.border = "2px solid green";
    }
  });

  // LocalStorage save
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("package", packageSelect.value);

    const successMessage = document.createElement("div");
    successMessage.classList.add("success-message");
    successMessage.textContent = "Appointment booked successfully!";
    document.body.appendChild(successMessage);

    setTimeout(() => {
      successMessage.remove();
    }, 4000);

    form.reset();
  });

  // ✅ API 3: Mostrar zona horaria
  showUserTimezoneBanner();
});
