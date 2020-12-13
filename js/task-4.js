
const spanValueRef = document.querySelector("#value");
const buttonDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);

const buttonIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);

function createCounter() {
  let counterValue = 0;
  const increment = function () {
    counterValue += 1;
    return counterValue;
  };
  const decrement = function () {
    counterValue -= 1;
    return counterValue;
  };

  return { increment, decrement };
}
const onClick = createCounter();

buttonDecrementRef.addEventListener("click", () => {
  spanValueRef.textContent = onClick.decrement();
});
buttonIncrementRef.addEventListener("click", () => {
  spanValueRef.textContent = onClick.increment();
});

