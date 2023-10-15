const searchField = document.getElementById("product-search");

const searchFunction = () => {
  let input = searchField.value.toLowerCase();
  let searchTitle = document.getElementById("search-title");

  // Change the header text based on input
  if (input) {
    searchTitle.innerText = `Search results for "${input}"`;
    searchTitle.classList.add("mt-3");
    searchTitle.classList.remove("d-none");
  } else {
    searchTitle.innerText = "";
    searchTitle.classList.remove("mt-3");
  }

  const cardTitles = document.getElementsByClassName("card-title");
  
  // Convert the HTMLCollection to an array for easier manipulation
  let cardTitlesArray = Array.from(cardTitles);

  cardTitlesArray.forEach((title) => {
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