const form = document.getElementById("excursionForm");
const required = [
  "nombre",
  "categoria",
  "dificultad",
  "duracion",
  "precio",
  "descripcion",
];

function validateField(field) {
  const group = field.closest(".form-group");
  const isValid = field.value.trim() !== "";

  group.classList.toggle("error", !isValid);
  return isValid;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  required.forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    if (!validateField(field)) {
      isValid = false;
    }
  });

  if (isValid) {
    // Si todo esta bien esto:)
    console.log("Formulario válido", Object.fromEntries(new FormData(form)));
  }
});

form.addEventListener("input", (e) => {
  if (required.includes(e.target.id)) {
    validateField(e.target);
  }
});

form.addEventListener("reset", () => {
  document.querySelectorAll(".form-group.error").forEach((group) => {
    group.classList.remove("error");
  });
});
