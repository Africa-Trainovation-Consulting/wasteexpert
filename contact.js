const form = document.getElementById("contactForm");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}/;

const handleSubmit = (e) => {
  e.preventDefault();
  let Url = "https://waste-expert-auth.herokuapp.com";

  const prePayload = new FormData(form);

  const payload = new URLSearchParams(prePayload);

  console.log([...payload]);
  fetch(`${Url}/api/v1/auth/inquire`, {
    method: "POST",
    body: payload,
  })
    .then((res) => res.json)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err.message));
};

const checkValidity = () => {
  let [validName, validEmail, validSubject, validMsg] = [
    false,
    false,
    false,
    false,
  ];

  if (fullName.value === "") {
    fullName.style.border = "1px solid red";
  } else {
    fullName.style.border = "1px solid green";
    document.querySelector(".invalidfullName").innerHTML = "";
    validName = true;
  }
  if (email.value === "") {
    email.style.border = "1px solid red";
  } else if (!pattern.test(email.value)) {
    email.style.border = "1px solid red";
    document.querySelector(".invalidEmail").innerHTML = "invalid email";
  } else {
    email.style.border = "1px solid green";
    document.querySelector(".invalidEmail").innerHTML = "";
    validEmail = true;
  }
  if (subject.value === "") {
    subject.style.border = "1px solid red";
  } else {
    subject.style.border = "1px solid green";
    document.querySelector(".invalidvalidSubject").innerHTML = "";
    validSubject = true;
  }
  if (message.value === "") {
    message.style.border = "1px solid red";
  } else {
    message.style.border = "1px solid green";
    document.querySelector(".invalidvalidMsg").innerHTML = "";
    validMsg = true;
  }
};

form.addEventListener("submit", handleSubmit);
