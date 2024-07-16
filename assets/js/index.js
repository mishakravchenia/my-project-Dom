"use strict";

const USER_URL = `https://randomuser.me/api?seed=abc`;
const rootEl = document.querySelector("#root");
const resultsPerPageInput = document.querySelector("#resultsPerPage");

let currentPage = 1;
let resultsPerPage = parseInt(resultsPerPageInput.value);

resultsPerPageInput.addEventListener("change", () => {
  resultsPerPage = parseInt(resultsPerPageInput.value);
  currentPage = 1;
  loadDataUser(currentPage, resultsPerPage);
});

loadDataUser(currentPage, resultsPerPage);

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

prevBtn.onclick = () => {
  if (currentPage > 1) {
    currentPage--;
    loadDataUser(currentPage, resultsPerPage);
  }
};

nextBtn.onclick = () => {
  currentPage++;
  loadDataUser(currentPage, resultsPerPage);
};

function loadDataUser(currentPage, resultsPerPage) {
  rootEl.textContent = "";
  fetch(`${USER_URL}&page=${currentPage}&results=${resultsPerPage}`)
    .then((response) => response.json())
    .then(({ results }) => {
      console.log(results);
      results.forEach((r) => userDataGenerator(r));
    })
    .catch((error) => console.log("Помилка:>>", error));
}

function userDataGenerator({
  name: { first, last },
  picture: { large: imgSrc },
  email,
  gender,
}) {
  const userCard = document.createElement("article");
  rootEl.append(userCard);
  userCard.classList.add("art");

  userCard.style.boxShadow = getGenderShadowColor(gender);

  const c = createNewImg(imgSrc, `${first} ${last}`, "userFoto");
  const userNameProfil = createNewEl("h2", `${first} ${last}`, "userName");
  const a = createNewEl("p", `Email: ${email}`, "userEmail");
  const b = createNewEl("p", `Gender: ${gender}`, "userGender");

  userCard.append(c, userNameProfil, a, b);
}

function getGenderShadowColor(gender) {
  if (gender === "male") {
    return "0 4px 8px 0 rgba(0, 0, 255, 0.5)";
  } else if (gender === "female") {
    return "0 4px 8px 0 rgba(255, 0, 255, 0.5)";
  }
}

function createNewImg(src, alt, className) {
  const newImg = document.createElement("img");
  newImg.src = src;
  newImg.alt = alt;
  newImg.classList.add(className);
  return newImg;
}

function createNewEl(type, content, className) {
  const newElement = document.createElement(type);
  newElement.textContent = content;
  newElement.classList.add(className);
  return newElement;
}
