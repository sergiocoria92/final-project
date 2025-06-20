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