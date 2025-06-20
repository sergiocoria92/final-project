// src/js/main.js
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/home.css';

import { loadHeader } from './header.js';
import { loadFooter } from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadFooter();
});
