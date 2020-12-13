const inputRef = document.querySelector('#validation-input');
// const checkInput = function () {
// 	if (inputRef.value.length === Number(inputRef.dataset.length)) {
// 		if (inputRef.classList.contains('invalid')) {
// 			inputRef.classList.remove('invalid');
// 		}
// 		inputRef.classList.add('valid');
// 	} else {
// 		if (inputRef.classList.contains('valid')) {
// 			inputRef.classList.remove('valid');
// 		}
// 		inputRef.classList.add('invalid');
// 	}
// };

// inputRef.addEventListener('blur', checkInput);

const checkInput = function (invalid, valid) {
	if (this.value.length === Number(this.dataset.length)) {
		this.classList.remove(invalid);
		this.classList.add(valid);
	} else {
		this.classList.remove(valid);
		this.classList.add(invalid);
	}
};

inputRef.addEventListener(
	'blur',
	checkInput.bind(inputRef, 'invalid', 'valid'),
);
