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

  emailjs.init("R4rsFxm-pE_aCZCHs");

  const form = document.getElementById("consultation-form");
  const thankYouMessage = document.getElementById("thank-you-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs
      .send("service_3d3a7h4", "template_2aap4hi", {
        name: name,
        email: email,
        message: message,
      })
      .then(
        function (response) {
          console.log("E-post sendt!", response.status, response.text);

          form.classList.add("uk-hidden");
          thankYouMessage.classList.remove("uk-hidden");
        },
        function (error) {
          console.error("Feil ved sending av e-post:", error);
          alert("Det oppsto en feil. Vennligst prøv igjen senere.");
        }
      );

    console.log({
      name: name,
      email: email,
      message: message,
    });
  });
});

window.addEventListener("load", function () {
  AOS.refresh();
});

window.onload = function () {
  AOS.init({
    duration: 600,
    once: true,
    offset: 200,
    throttleDelay: 200,
    debounceDelay: 50,
  });
};
