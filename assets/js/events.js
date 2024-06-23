const signUpBtn = document.querySelector("#sign");
console.dir(signUpBtn);

function eventHander(event) {
  console.log(event);
  alert(`ви успішно зареєстровані`);
}
.onclick = eventHander;
// signUpBtn.onclick = null;
