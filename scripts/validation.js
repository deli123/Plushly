const form = document.querySelector(".needs-validation");

// prevent form submissions if there are invalid fields
form.addEventListener("submit", (event) => {
  // checkValidity() method checks whether the element has any constraints and whether it satisfies them
  if (!form.checkValidity()) {
    event.preventDefault();
  } else {
    alert("Success!");
  }

  form.classList.add("was-validated");
});
