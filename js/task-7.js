const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

// идея MaximRight убрать скачок при изменении шрифта, мой вариант реализации ))
inputRef.value = parseInt(window.getComputedStyle(textRef).fontSize, 10);

function onChangeRange() {
	textRef.style.fontSize = `${inputRef.value}px`;
}
inputRef.addEventListener('input', onChangeRange);
