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

form.addEventListener("submit", handleSubmit);
