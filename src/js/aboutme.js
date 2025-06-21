document.addEventListener("DOMContentLoaded", loadEventData);

async function loadEventData() {
  const container = document.querySelector(".grid-container");
  if (!container) return;

  try {
    const response = await fetch("aboutme.json");

    const data = await response.json();

    container.innerHTML = ""; // Limpia el contenedor

    data.forEach(event => {
      const card = document.createElement("div");
      card.classList.add("photo-card");

      card.innerHTML = `
        <div class="caption">
          <h4>${event.title}</h4>
        </div>
        <img src="${event.url}" alt="${event.title}" loading="lazy">
        <div class="description">
          <small>${event.description}</small>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading event data:", error);
  }
}


/*hambruguesa*/
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});


// Mostrar consejo motivacional
// Mostrar consejo motivacional en la parte superior
async function loadAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const adviceText = data.slip.advice;

    const adviceContainer = document.createElement("div");
    adviceContainer.classList.add("advice-message");
    adviceContainer.textContent = `"${adviceText}"`;

    // Insertarlo al inicio del main o del body
    const main = document.querySelector("main") || document.body;
    main.insertBefore(adviceContainer, main.firstChild);
  } catch (error) {
    console.error("Error fetching advice:", error);
  }
}
