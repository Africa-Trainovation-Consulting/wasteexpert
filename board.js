const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");
const navButton = document.querySelector(".navbutton");
const navOption = document.querySelector('#navOption');
const closeButton = document.querySelector('#closeButton');

 menuBtn.addEventListener("click", ()=>{
     sideMenu.style.display = "block";
     closeBtn.style.display = "block";     
     menuBtn.style.display = "none";     
 })

 closeBtn.addEventListener("click", ()=>{
     sideMenu.style.display = "none";
     closeBtn.style.display = "none";     
     menuBtn.style.display = "block";     
 })

navButton.addEventListener("click", ()=>{
    navOption.style.display = "flex";
    closeButton.style.display = 'block';
    navButton.style.display = 'none';
})

closeButton.addEventListener("click", ()=>{
    navOption.style.display = "none";
    closeButton.style.display = 'none';
    navButton.style.display = 'block';
})