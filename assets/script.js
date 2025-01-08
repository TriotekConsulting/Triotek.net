document.addEventListener("DOMContentLoaded", function () {
  const scrollIndicator = document.querySelector(".scroll-down-indicator");
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", function () {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    });
  }
});
