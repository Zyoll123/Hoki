const showPassword = document.querySelector("#eye");
const hidePassword = document.querySelector("#password");

showPassword.addEventListener("click",function(){
    this.classList.toggle("fa-regular fa-eye-slash");
    const type = hidePassword.getAttribute("type")
    === "password" ? "text" : "password";
    hidePassword.setAttribute("type",type);
})
