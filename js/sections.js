const sections = document.querySelectorAll("div.section");

sections.forEach((section) => {
  const title = section.querySelector("div.section-title");
  const content = section.querySelector("div.section-content");

  title.addEventListener("click", () => {
    section.classList.toggle("active");
  });
});
