const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    const name = document.getElementById("name");
    const pass = document.getElementById("pass");
    const nameError = document.querySelector(".nameError");
    const passError = document.querySelector(".passError");
    e.preventDefault();

    if(name.value==""){
        nameError.innerHTML = "Please Enter your Username/Email";
        nameError.classList.add("displayMessage", "love");
    }
    if(pass.value==""){
        passError.innerHTML = "Please Enter your password";
        passError.classList.add("displayMessage");
    }
    
})



fetch("https://api.escuelajs.co/api/v1/users")
.then((res) => res.json())
.then((data) => {
    console.log(data)
})