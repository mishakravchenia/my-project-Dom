
const FACTSCAT_URL = "https://catfact.ninja/fact";

function fetchCatFact() {
  fetch(FACTSCAT_URL)
    .then((response) => response.json())
    .then((data) => displayCatFact(data));
}

function displayCatFact(factData) {
  const catFactElement = document.getElementById("cat-fact");
  catFactElement.innerHTML = `${factData.fact} (${factData.length} characters)`;
}

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("bt");
  button.addEventListener("click", fetchCatFact);
});
