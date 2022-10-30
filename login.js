const form = document.getElementById("loginForm");

const handleSubmit = (e) => {
  e.preventDefault();

  const payload = new FormData(form);

  console.log([...payload]);

  fetch("https://waste-expert-auth.herokuapp.com/api/v1/auth/login", {
    method: "POST",
    body: payload,
  });
};

form.addEventListener("submit", handleSubmit);
