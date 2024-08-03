let box = document.querySelector(".email form .box");
let errorMesg = document.createElement("p");
errorMesg.className = "error-mesg";
errorMesg.textContent = "Please enter a valid email address";
box.appendChild(errorMesg);

let input = document.querySelector("input");

document.forms[0].onsubmit = function (e) {
  let regex = /\w+@[a-z]{2,}\.[a-z]{2,}/gi;

  if (regex.test(input.value)) {
    errorMesg.classList.remove("active");
  } else {
    errorMesg.classList.add("active");
  }

  e.preventDefault();
};
