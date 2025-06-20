
/*styles lo que iba en MAIN*/

// Este archivo es exclusivo para la página Home
import '../styles/home.css';
import '../styles/header.css';
import '../styles/footer.css';

// En tu home.js AGREGA esto al inicio:
import '../public/images/mariana.jpeg'; // Fuerza a Vite a procesar la imagen
import '../public/images/ikal.jpeg';

import { loadHeader } from './header.js';
import { loadFooter } from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadFooter();
});

/*bottom*/

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("booking-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your appointment has been scheduled!");
      form.reset();
    });
  }
});