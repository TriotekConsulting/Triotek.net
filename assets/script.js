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

  AOS.init({
    duration: 1200,
    once: true,
    offset: 200,
  });
});
