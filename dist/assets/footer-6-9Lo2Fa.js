(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function l(){document.body.insertAdjacentHTML("afterbegin",`
    <header>
      <nav>
        <h1>Ikal Pysicologic therapy</h1>
            <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="book.html">Book</a></li>
            <li><a href="aboutme.html">About me</a></li>
            </ul>
      </nav>
    </header>
  `)}function n(){document.body.insertAdjacentHTML("beforeend",`
    <footer>
      <p>&copy; 2025 Mindful Therapy. All rights reserved.</p>
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
  `)}export{n as a,l};
