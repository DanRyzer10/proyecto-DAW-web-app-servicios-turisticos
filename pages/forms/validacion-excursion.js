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
  let isValid = false;

  if (field.tagName === "SELECT") {
    isValid = field.value.trim() !== "" && field.selectedIndex !== 0;
  } else if (field.type === "checkbox") {
    const checkboxes = document.querySelectorAll(
      'input[name="servicios"]:checked'
    );
    isValid = checkboxes.length > 0;
  } else {
    isValid = field.value.trim() !== "";
  }

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

  const checkboxes = document.querySelectorAll(
    'input[name="servicios"]:checked'
  );
  const serviciosGroup = document.querySelector(".checkbox-grid");
  const errorMessage = serviciosGroup.querySelector(".error-message");

  if (checkboxes.length === 0) {
    isValid = false;
    serviciosGroup.classList.add("error");
    errorMessage.style.display = "block"; 
  } else {
    serviciosGroup.classList.remove("error");
    errorMessage.style.display = "none"; 
  }

  if (isValid) {
    console.log("Formulario válido", Object.fromEntries(new FormData(form)));
  }
});

form.addEventListener("input", (e) => {
  if (required.includes(e.target.id)) {
    validateField(e.target);
  }

  const checkboxes = document.querySelectorAll(
    'input[name="servicios"]:checked'
  );
  const serviciosGroup = document.querySelector(".checkbox-grid");
  const errorMessage = serviciosGroup.querySelector(".error-message");

  if (checkboxes.length === 0) {
    serviciosGroup.classList.add("error");
    errorMessage.style.display = "block";
  } else {
    serviciosGroup.classList.remove("error");
    errorMessage.style.display = "none";
  }
});

form.addEventListener("reset", () => {
  document.querySelectorAll(".form-group.error").forEach((group) => {
    group.classList.remove("error");
  });
  // Limpiar el mensaje de error de los servicios
  document.querySelector(".checkbox-grid").classList.remove("error");
  document.querySelector(".checkbox-grid .error-message").style.display =
    "none";
});
