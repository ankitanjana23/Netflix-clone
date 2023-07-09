const collapsables = document.getElementsByClassName("collapsable");

for (let i = 0; i < collapsables.length; i++) {
  collapsables[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
}