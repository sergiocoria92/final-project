document.addEventListener("DOMContentLoaded", () => { //DOM
  const form = document.getElementById("booking-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your appointment has been scheduled!");
      form.reset();
    });
  }
});


