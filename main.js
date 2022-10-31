// <<<<<<< HEAD
// <<<<<<< HEAD
document.getElementById("bar").onclick = function () {
  document.getElementById("nav").classList.toggle("show");
  document.getElementById("icon").classList.toggle("fa-times");
  // =======
  // =======
  document.getElementById("hamburger").onclick = function () {
    document.getElementById("hamburger").classList.toggle("fa-times");
    // document.getElementById('nav').classList.toggle("show")
  };

  var myCarousel = document.querySelector("#myCarousel");
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 500,
    wrap: false,
  })(
    // >>>>>>> walexy
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    function () {
      "use strict";

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll(".needs-validation");

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          },
          false
        );
      });
    }
  )();

  // <<<<<<< HEAD
  //  changeicon = (icon) => icon.classList.toggle("fa-times");
  //   Another method for the toggle
  document.getElementById("icon").onclick = function () {
    document.getElementById("icon").classList.toggle("fa-times");
    // >>>>>>> bunmi
  };
  // =======

  // // Example starter JavaScript for disabling form submissions if there are invalid fields
  // (function () {
  //   'use strict'

  //   // Fetch all the forms we want to apply custom Bootstrap validation styles to
  //   var forms = document.querySelectorAll('.needs-validation')

  //   // Loop over them and prevent submission
  //   Array.prototype.slice.call(forms)
  //     .forEach(function (form) {
  //       form.addEventListener('submit', function (event) {
  //         if (!form.checkValidity()) {
  //           event.preventDefault()
  //           event.stopPropagation()
  //         }
  // else
  //         form.classList.add('was-validated')
  //       }, false)
  //     })
  // })(
};

const subscribeForm = document.getElementById("subscribeForm");

const handleSubmit = async (e) => {
  e.preventDefault();

  let Url = "https://waste-expert-auth.herokuapp.com";

  const prePayload = new FormData(subscribeForm);

  const payload = new URLSearchParams(prePayload);

  console.log([...payload]);

  const response = await fetch(`${Url}/api/v1/auth/subscribe`, {
    method: "POST",
    body: payload,
  });

  const data = await response.json();

  console.log(data);

  if (data.message === "All fields required") {
    subscribeEmail.style.border = "1px solid red";
  } else {
    subscribeEmail.style.border = "1px solid white";
    subscribeEmail.value = "";
  }
};

subscribeForm.addEventListener("submit", handleSubmit);

// const handleSubmited = async (e) => {
//   e.preventDefault();

//   if (desktopEmail === "") {
//     desktopEmail.style.border = "1px solid red";
//   } else {
//     desktopEmail.style.border = "1px solid green";
//   }

//   let Url = "https://waste-expert-auth.herokuapp.com";

//   const prePayload = new FormData(desktopEmail);

//   const payload = new URLSearchParams(prePayload);

//   console.log([...payload]);

//   const response = await fetch(`${Url}/api/v1/auth/subscribe`, {
//     method: "POST",
//     body: payload,
//   });
//   const data = await response.json();

//   console.log(data);
// };

// desktopEmail.addEventListener("submit", handleSubmited);
