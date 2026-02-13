function signOut() {
  let btn = document.querySelector(".log-out");

  btn.addEventListener("click", () => {
    localStorage.clear();
    setTimeout(() => {
      window.location.href = "sign-page.html";
    }, 1500);
  });
}

export { signOut };
