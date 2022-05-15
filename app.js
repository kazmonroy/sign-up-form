const form = document.getElementById("my-form");
const firstName = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone_number");
const password = document.getElementById("user_pass");
const password2 = document.getElementById("confirm_user_pass");
const checkBox = document.getElementById("terms");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const passwordValue = password.value.trim();
  const password2_Value = password2.value.trim();
  console.log(phoneValue.length);

  if (firstNameValue === "") {
    setErrorFor(firstName, "Username cannot be blank");
  } else {
    setValidFor(firstName);
  }

  if (lastnameValue === "") {
    setErrorFor(lastname, "Lastname cannot be blank");
  } else {
    setValidFor(lastname);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setValidFor(email);
  }

  if (phoneValue === "") {
    setErrorFor(phone, "Phone number cannot be blank");
  } else if (!isLength(phoneValue)) {
    setErrorFor(phone, "Phone number must be 8 digits");
  } else {
    setValidFor(phone);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setValidFor(password);
  }

  if (password2_Value === "") {
    setErrorFor(password2, "Password cannot be blank");
  } else if (passwordValue !== password2_Value) {
    setErrorFor(password2, "Password do not match");
  } else {
    setValidFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
  small.style.color = "red";
}

function setValidFor(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control success";
  small.innerText = "";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isLength(phone) {
  return /[0-9]{8}/.test(phone);
}
