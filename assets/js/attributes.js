const user = {
  firstName: "Test",
  lastName: "Testovych",
  profilePhoto: "Зображеня",
  birthday: new Date("2000-05-16"),
  nickname: "super dev",
  likesCount: 10,
};
const downloadButton = document.querySelector("#downloadButton");
downloadButton.onclick = function () {
  const userInfoEl = document.querySelector("#userProfile");
  userInfoEl.innerHTML = `
  <p id="userFirstName">firstName: ${user.firstName}</p>
  <p id="userLastName">lastName: ${user.lastName}</p>
  <p id="userNickname">nickname: ${user.nickname}</p>
  <p id="userLikesCount">likesCount: ${user.likesCount}</p>
  <p id="userBirthday">birthday: ${user.birthday.toDateString()}</p>
`;

  const imgFoto = {
    src: "https://media.istockphoto.com/id/1388886094/cs/fotografie/portr%C3%A9t-psa.jpg?s=1024x1024&w=is&k=20&c=iAWakOQLoEZ65SjkoXhR3XUtOp0QXpOlnWJ2S0PJv_0=",
    alt: "dog",
  };

  const imgFotoEl = document.querySelector("#profilePhoto");
  console.dir(imgFotoEl.id);
  imgFotoEl.src = imgFoto.src;
  imgFotoEl.alt = imgFoto.alt;
  imgFotoEl.style.backgroundRepeat = "no-repeat";
  imgFotoEl.style.objectFit = "cover";
  imgFotoEl.style.width = "100px";
  imgFotoEl.style.height = "100px";
  const userBirthday = document.querySelector("#userBirthday");

  function calculateAge(birthday) {
    let ageUser = new Date().getFullYear() - birthday.getFullYear();
    return ageUser;
  }
  userBirthday.onmouseenter = () => {
    const age = calculateAge(user.birthday);
    userBirthday.innerHTML = `birthday: age: ${age}`;
  };
  userBirthday.onmouseleave = () => {
    userBirthday.innerHTML = `birthday: ${user.birthday.toDateString()}`;
  };
};
// //
const buttonHeart = document.querySelector(".heartIcon");

function colorChange(e) {
  buttonHeart.style.color = "red";
}
buttonHeart.onclick = colorChange;
//
// const userBirthday = document.querySelector("#userBirthday");

// function calculateAge(birthday) {
//   let ageUser = new Date().getFullYear() - birthday.getFullYear();
//   return ageUser;
// }
// userBirthday.onmouseenter = () => {
//   const age = calculateAge(user.birthday);
//   userBirthday.innerHTML = `birthday: age: ${age}`;
// };
// userBirthday.onmouseleave = () => {
//   userBirthday.innerHTML = `birthday: ${user.birthday.toDateString()}`;
// };
//
