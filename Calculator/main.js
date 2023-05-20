let string = "";
let keys = document.querySelectorAll(".key");
keys.forEach((keys) => {
  keys.addEventListener("click", (e) => {
    if (e.target.innerText == "=") {
      document.querySelector("#recent-scrn").value = string;
      string = eval(string);
      document.querySelector("#main-scrn").value = string;
    } else if (e.target.innerText == "clear") {
      string = "";
      document.querySelector("#recent-scrn").value = string;

      document.querySelector("#main-scrn").value = string;
    } else {
      string = string + e.target.innerText;

      document.querySelector("#main-scrn").value = string;
    }
  });
});
