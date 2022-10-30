const form = document.getElementById("loginForm");

const handleSubmit = (e) => {
  e.preventDefault();

  const prePayload = new FormData(form);

  console.log([...prePayload]);
};

form.addEventListener("submit", handleSubmit);
