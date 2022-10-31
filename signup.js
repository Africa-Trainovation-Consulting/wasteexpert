const form = document.getElementById("signupForm");

const handleSubmit = (e) => {
  e.preventDefault();

  let Url = "https://waste-expert-auth.herokuapp.com";

  const prePayload = new FormData(form);

  const payload = new URLSearchParams(prePayload);

  console.log([...payload]);

  fetch(`${Url}/api/v1/auth/register`, {
    method: "POST",
    body: payload,
  })
    .then((res) => res.json)
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err);
    });
};

form.addEventListener("submit", handleSubmit);
