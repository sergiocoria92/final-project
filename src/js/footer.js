import { PageLogger } from './PageLogger.js';

export function loadFooter() {
  const logger = new PageLogger(document.title);
  const logMessage = logger.getMessage();

  const html = `
    <footer>
      <p>&copy; 2025 <br>Sergio Coria</p>
      <p class="page-logger">${logMessage}</p>
      <div class="social-links">
        <a href="https://www.facebook.com/share/19otW9BnJE/" target="_blank" rel="noopener">
          <img src="images/facebook.svg" alt="Facebook" class="social-icon">
        </a>
        <a href="https://www.instagram.com/ikalpsicologia/?igsh=YnQ3ZG05Z3g0OHR2#" target="_blank" rel="noopener">
          <img src="images/instagram.svg" alt="Instagram" class="social-icon">
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener">
          <img src="images/x.svg" alt="X" class="social-icon">
        </a>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML("beforeend", html);
}
