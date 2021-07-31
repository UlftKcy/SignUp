// variables
const userName = document.getElementById("userName");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errors = document.querySelector(".errors");
const signUpBtn = document.querySelector(".btn");
signUpBtn.addEventListener("click", submitFunc);

// function
function submitFunc(e) {
  e.preventDefault();
  errors.innerHTML = "";
  const nameRegexPattern = /[^a-zA-Z]+/g;
  const emailRegexPattern = /\S+\@+\S+\.+\S/;
  const emailExtensionPattern = /\S+\@+\S+\.+\S{4}/;
  try {
    if (userName.value.length === 0) {
      throw new Error("Please enter your username");
    } else if (
      firstName.value.length === 0 ||
      nameRegexPattern.test(firstName.value)
    ) {
      throw new Error("Please enter valid first name");
    } else if (
      lastName.value.length === 0 ||
      nameRegexPattern.test(lastName.value)
    ) {
      throw new Error("Please enter valid last name");
    } else if (
      email.value.length === 0 ||
      !emailRegexPattern.test(email.value)
    ) {
      throw new Error("Please enter valid email");
    } else if (emailExtensionPattern.test(email.value)) {
      throw new Error("The maximum length of the extension should be 3!");
    } else if (
      password.value.length === 0 ||
      password.value.length < 5 ||
      password.value.length > 60
    ) {
      throw new Error("Please enter password between 4 and 60 characters.");
    }
    Swal.fire({
      title: "Form has been submitted",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then(function () {
      // tamam butonu sonrası yönlendirmeyi yap.
      location.replace("index.html");
    });
  } catch (error) {
    errors.innerHTML = error.message;
    errors.style.color = "red";
  }
}
