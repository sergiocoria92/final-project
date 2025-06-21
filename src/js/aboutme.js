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




// Mostrar consejo motivacional
// Mostrar consejo motivacional en la parte superior
// Mostrar consejo motivacional en la parte superior de la página
async function loadAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache" // evitar que Vite use versiones guardadas
    });
    const data = await response.json();
    const adviceText = data.slip.advice;

    const adviceContainer = document.createElement("div");
    adviceContainer.classList.add("advice-message");
    adviceContainer.textContent = `"${adviceText}"`;

    // Insertar antes del contenido principal
    const main = document.querySelector("main");
    if (main) {
      main.insertBefore(adviceContainer, main.firstChild);
    } else {
      document.body.insertBefore(adviceContainer, document.body.firstChild);
    }
  } catch (error) {
    console.error("Error loading advice:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadAdvice);

