AOS.init({
    duration: 1300,
});


const passwordInput = document.querySelector(".password-input");
const passwordInput2 = document.querySelector(".password-input2");

const eyeBtn = document.querySelector(".password-input + .eye-btn");
const eyeBtn2 = document.querySelector(".password-input2 + .eye-btn");

eyeBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeBtn.innerHTML = "<i class='uil uil-eye'></i>";
  } else {
    passwordInput.type = "password";
    eyeBtn.innerHTML = "<i class='uil uil-eye-slash'></i>";
  }
});

eyeBtn2.addEventListener("click", () => {
  if (passwordInput2.type === "password") {
    passwordInput2.type = "text";
    eyeBtn2.innerHTML = "<i class='uil uil-eye'></i>";
  } else {
    passwordInput2.type = "password";
    eyeBtn2.innerHTML = "<i class='uil uil-eye-slash'></i>";
  }
});
