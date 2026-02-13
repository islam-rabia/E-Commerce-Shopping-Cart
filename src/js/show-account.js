function showAccount() {
  let parent = document.querySelector(".account");
  let span = parent.querySelector("span");
  let paragraph = parent.querySelector("p");

  let account = JSON.parse(localStorage.getItem("account")) || [];
  if (account) {
    paragraph.innerHTML = `Welcome, ${account.firstName} ${account.lastName}`;
    span.innerHTML = `${account.email}`;
  }
}

export { showAccount };
