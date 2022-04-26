const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");


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
