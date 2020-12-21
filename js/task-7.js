const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

// идея MaximRight убрать скачек при изменении шрифта, мой вариант реализации )) выставила уровень по системному шрифту
// inputRef.value = parseInt(window.getComputedStyle(textRef).fontSize, 10);

function onChangeRange() {
  textRef.style.fontSize = `${inputRef.value}px`;
}
onChangeRange();

inputRef.addEventListener("input", onChangeRange);
