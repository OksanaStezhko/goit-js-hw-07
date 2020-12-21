const spanValueRef = document.querySelector("#value");
const buttonDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);

const buttonIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = 0;

function increment() {
  counterValue += 1;
  spanValueRef.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  spanValueRef.textContent = counterValue;
}

buttonDecrementRef.addEventListener("click", decrement);
buttonIncrementRef.addEventListener("click", increment);
