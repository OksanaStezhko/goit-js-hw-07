const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

const changeText = function (event) {
	outputNameRef.textContent = event.target.value||'незнакомец';
};

inputNameRef.addEventListener('input', changeText);
