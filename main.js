<<<<<<< HEAD
document.getElementById("bar").onclick = function () {
    document.getElementById("nav").classList.toggle("show")
    document.getElementById("icon").classList.toggle("fa-times")
=======
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
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
})();

//  changeicon = (icon) => icon.classList.toggle("fa-times");
//   Another method for the toggle 
document.getElementById('icon').onclick = function(){
  document.getElementById('icon').classList.toggle('fa-times')
>>>>>>> bunmi
}
