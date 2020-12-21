const inputRef = document.querySelector("#validation-input");

const checkInput = function (event) {
  if (event.target.value.length === Number(this.dataset.length)) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", checkInput.bind(inputRef));
