let form = document.getElementById("register");
let login = document.getElementById("login");
let password = document.getElementById("password");

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify([]));
}

let users = JSON.parse(localStorage.getItem("users"));

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!login.value || !password.value) {
    return alert("Input areas cannot be empty!");
  }

  if (users.find((user) => user.login === login.value)) {
    return alert("Username already exists!");
  }

  let newUser = {
    login: login.value,
    password: password.value,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  console.log(newUser);
});
