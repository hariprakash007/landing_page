const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

console.log("Hi");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});
