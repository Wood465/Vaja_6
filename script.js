(() => {
  "use strict";

  const form = document.getElementById("reservationForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      alert("Hvala! Vaša rezervacija je bila poslana.");
      form.reset();
    }

    form.classList.add("was-validated");
  });
})();
