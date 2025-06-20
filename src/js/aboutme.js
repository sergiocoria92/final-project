// Este archivo es exclusivo para la página Home
import '../styles/services.css';
import '../styles/header.css';
import '../styles/footer.css';

import { loadHeader } from './header.js';
import { loadFooter } from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadFooter();
});

/**/
document.addEventListener("DOMContentLoaded", loadEventData);

async function loadEventData() {
  const container = document.querySelector(".grid-container");
  if (!container) return;

  try {
    const response = await fetch("/aboutme.json");
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