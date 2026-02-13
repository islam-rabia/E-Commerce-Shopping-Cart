function moveForm() {
  let signUpPage = document.getElementById("signUp-page");
  let signInPage = document.getElementById("signIn-page");

  let messageSignUp = document.querySelector(".message-signUp");
  let messageSignIn = document.querySelector(".message-signIn");

  messageSignIn.addEventListener("click", () => {
    signInPage.style.transform = "translateX(-385px)";
    signUpPage.style.transform = "translateX(-100%)";
  });

  messageSignUp.addEventListener("click", () => {
    signInPage.style.transform = "translateX(0px)";
    signUpPage.style.transform = "translateX(0%)";
  });
}

export { moveForm };
