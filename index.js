document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    var emailInput = document.getElementById("email");
    var errorMessage = document.getElementById("email-error");
  
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailPattern.test(emailInput.value)) {
      errorMessage.classList.add("show");
      errorMessage.textContent =
        "Please check your email";
    } else {
      errorMessage.classList.remove("show");
      errorMessage.textContent = "";
    }
  });
