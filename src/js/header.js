export function loadHeader() {
  const html = `
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
  `;
  document.body.insertAdjacentHTML("afterbegin", html);
}
