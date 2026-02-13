function signIn() {
  let formSignIn = document.querySelector(".form-signIn");
  let email = formSignIn.querySelector(".email-signIn");
  let password = formSignIn.querySelector(".password-signIn");
  let submit = formSignIn.querySelector(".submit");
  let warningMessage = document.querySelector(".warning-message");
  let paragraph = document.querySelector(".warning-message p");

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (email.value !== "" && password.value !== "") {
      checkAccount(warningMessage, email, password, paragraph);
    } else {
      warningMessage.classList.add("active");
      paragraph.innerHTML = "Please fill in all fields";
      setTimeout(() => {
        warningMessage.classList.remove("active");
      }, 1500);
    }
  });
}

function checkAccount(warningMessage, email, password, paragraph) {
  let account = JSON.parse(localStorage.getItem("account")) || [];

  if (email.value === account.email && password.value === account.password) {
    warningMessage.classList.remove("active");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  } else {
    warningMessage.classList.add("active");
    paragraph.innerHTML = "email or password is incorrect";
    setTimeout(() => {
      warningMessage.classList.remove("active");
    }, 1500);
  }
}

export { signIn };
