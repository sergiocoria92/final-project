export function loadHeader() {
  const html = `
    <header>
      <nav class="navbar">
        <h1>Ikal Psychological Therapy</h1>
        <button class="menu-toggle">&#9776;</button>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="book.html">Book</a></li>
          <li><a href="aboutme.html">About me</a></li>
        </ul>
      </nav>
    </header>
  `;
  document.body.insertAdjacentHTML("afterbegin", html);

  // Activar hamburguesa después de insertar el HTML
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}
