function signUp() {
  let signUpPage = document.getElementById("signUp-page");
  let signInPage = document.getElementById("signIn-page");
  let formSignUp = document.querySelector(".form-signUp");
  let submit = formSignUp.querySelector(".submit");
  let firstName = formSignUp.querySelector(".firstName");
  let lastName = formSignUp.querySelector(".lastName");
  let email = formSignUp.querySelector(".email");
  let password = formSignUp.querySelector(".password");
  let warningMessage = document.querySelector(".warning-message");

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      firstName.value !== "" &&
      lastName.value !== "" &&
      email.value !== "" &&
      password.value !== ""
    ) {
      registerAccount(firstName, lastName, email, password);
      formSignUp.reset();
      console.log("hello");

      signInPage.classList.add("active");
      signUpPage.classList.add("active");
    } else {
      warningMessage.classList.add("active");
      setTimeout(() => {
        warningMessage.classList.remove("active");
      }, 1500);
    }
  });
}

function registerAccount(firstName, lastName, email, password) {
  let account = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };

  saveInLocalStorage(account);
}

function saveInLocalStorage(data) {
  localStorage.setItem("account", JSON.stringify(data));
}

export { signUp };
