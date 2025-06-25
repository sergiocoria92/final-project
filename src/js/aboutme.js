document.addEventListener("DOMContentLoaded", () => { //DOM
  loadEventData();
  loadAdvice();
});

/*ASYNC*/
async function loadEventData() {
  const container = document.querySelector(".grid-container");
  if (!container) return;

  try {
    const response = await fetch("aboutme.json");
    const data = await response.json();

    container.innerHTML = "";

    /*DOM*/
    data.forEach(event => {
      // ✅ CAMBIO: omitir eventos privados
      if (event.visibility !== "public") return;

      const card = document.createElement("div");
      card.classList.add("photo-card");

      // ✅ CAMBIO: agregar clase según categoría
      if (event.category) {
        card.classList.add(`cat-${event.category.toLowerCase().replace(/\s+/g, '-')}`);
      }


      card.innerHTML = `
        <div class="caption">
          <h4>${event.title}</h4>
        </div>
        <img src="${event.url}" alt="${event.title}" loading="lazy">
        <div class="description">
          <p><strong>Description:</strong> ${event.description}</p>
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Location:</strong> ${event.location}</p>
          <p><strong>Highlight:</strong> ${event.highlight}</p>
          <p><strong>Impact:</strong> ${event.impact}</p>
          <p><strong>Category:</strong> ${event.category}</p>
          <p><strong>Emotion:</strong> ${event.emotion}</p>
          <p><strong>Testimonial:</strong> <em>${event.testimonial}</em></p>
        </div>
        <div class="external-link">
          <a href="${event.mediaLink}" target="_blank">View More</a>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading event data:", error);
  }
}

/*API ADVICE SLIP*/
async function loadAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache"
    });
    const data = await response.json();
    const adviceText = data.slip.advice;

    const adviceContainer = document.createElement("div");
    adviceContainer.classList.add("advice-message");
    adviceContainer.textContent = `"${adviceText}"`;

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
