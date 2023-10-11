const form = document.querySelector(".needs-validation");

// prevent form submissions if there are invalid fields
form.addEventListener("submit", (event) => {
  // checkValidity() method checks whether the element has any constraints and whether it satisfies them
  if (!form.checkValidity()) {
    event.preventDefault();
  }

  form.classList.add("was-validated");
});

const onlyAllowNumbers = (type) => {
  const field = document.querySelector(`#${type}`);
  if (field.value.length > field.maxLength) {
    field.value = field.value.slice(0, field.maxLength);
  }
};
