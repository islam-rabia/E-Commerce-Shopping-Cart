function showSectionSearch() {
  let sectionSearch = document.querySelector("#search_product");
  let searchInput = document.querySelector(".search-input input");
  let closeSearch = document.querySelector(".close-search");
  let input = sectionSearch.querySelector("input");

  searchInput.addEventListener("click", () => {
    sectionSearch.classList.add("active");
    setTimeout(() => {
      input.focus();
    }, 100);
  });

  closeSearch.addEventListener("click", () => {
    sectionSearch.classList.remove("active");
  });
}

export { showSectionSearch };
