const form = document.querySelector("form");

fetch("https://api.escuelajs.co/api/v1/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    form.addEventListener("submit", (e) => {
      const name = document.getElementById("name");
      const pass = document.getElementById("pass");
      const nameError = document.querySelector(".nameError");
      const passError = document.querySelector(".passError");
      e.preventDefault();
      nameError.classList.add("displayMessage");
      passError.classList.add("displayMessage");
      if (name.value == "") {
        nameError.innerHTML = "Please Enter your Email Address";
      }
      if (pass.value == "") {
        passError.innerHTML = "Please Enter your password";
      }
      data.forEach((suny) => {
        if (name.value == suny.email && pass.value == suny.password) {
          console.log("Credentials matched for user:", suny.email);
          nameError.innerHTML = "correct Email";
          passError.innerHTML = "correct password";
        } else if (name.value != suny.email && pass.value == suny.password) {
          nameError.innerHTML = "wrong Email";
          passError.innerHTML = "";
        } else if (name.value == suny.email && pass.value != suny.password) {
          nameError.innerHTML = "";
          passError.innerHTML = "wrong Password";
        } else if (
          name.value != suny.email &&
          pass.value != suny.password &&
          name.value != "" &&
          pass.value != ""
        ) {
          nameError.innerHTML = "wrong Email";
          passError.innerHTML = "wrong Password";
        }
      });
    });
  });
