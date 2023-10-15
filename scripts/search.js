const searchField = document.getElementById("product-search");

const myFunction = () => {
  let input = searchField.value.toLowerCase();

  const cardTitles = document.getElementsByClassName("card-title");

  // Convert the HTMLCollection to an array for easier manipulation
  let cardTitlesArray = Array.from(cardTitles);

  cardTitlesArray.forEach(function (title) {
    // Check if the title contains the filter text
    let titleText = title.innerText.toLowerCase();
    if (titleText.includes(input)) {
      // .card-title is 3 levels deep in its container
      // Show the element if it matches the filter text
      title.parentElement.parentElement.parentElement.style.display = "block";
    } else {
      // Hide the element if it does not match the filter text
      title.parentElement.parentElement.parentElement.style.display = "none";
    }
  });
};
