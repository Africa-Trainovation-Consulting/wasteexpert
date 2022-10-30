const form = document.getElementById("loginForm");

const handleSubmit = (e) => {
  e.preventDefault();
  const prePayload = new FormData(form);
};

form.addEventListener("submit", handleSubmit);
