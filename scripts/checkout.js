const countrySelect = document.getElementById("country");
const stateSelect = document.getElementById("state");

const stateOptions = {
  "United States": {
    states: [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ],
  },
  Netherlands: {
    states: [],
  },
};

const updateStatesByCountry = () => {
  if (countrySelect.value === "United States") {
    stateSelect.required = true;
    stateSelect.innerHTML = "";
    stateSelect.innerHTML +=
      '<option hidden disabled selected value="">Select...</option>';
    stateOptions[countrySelect.value].states.forEach(
      (e) => (stateSelect.innerHTML += `<option value=${e}">${e}</option>`)
    );
  } else if (countrySelect.value === "Netherlands") {
    stateSelect.innerHTML = "";
    stateSelect.required = false;
  }
};

countrySelect.addEventListener("change", updateStatesByCountry);
updateStatesByCountry();
