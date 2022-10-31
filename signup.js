const form = document.getElementById("loginForm");

let error = [];

const handleSubmit = (e) => {
  e.preventDefault();

  let Url = "https://waste-expert-auth.herokuapp.com";

  const prePayload = new FormData(form);

  const payload = new URLSearchParams(prePayload);

  console.log([...payload]);

  fetch(`${Url}/api/v1/auth/login`, {
    method: "POST",
    body: payload,
  })
    .then((res) => res.json)
    .then((data) => console.log(data))
    .catch((err) => error.push(err));
};

form.addEventListener("submit", handleSubmit);
