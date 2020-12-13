const numberRef = document.querySelector('[type = "number"]');
const boxesRef = document.querySelector('#boxes');
const buttonCreateRef = document.querySelector('button[data-action="render"]');
const buttonDestroyRef = document.querySelector('button[data-action="destroy"]');

const generatorColor = function () {
	const color = Math.floor(Math.random() * 16777216).toString(16);
	return '#000000'.slice(0, -color.length) + color;
};

const createBoxes = function (amount) {
	let width = 30;
	let height = 30;
	const elementArray = [];
	for (let i = 0; i < amount; i += 1) {
		const itemBoxesRef = document.createElement('div');
		itemBoxesRef.style.width = `${width}px`;
		itemBoxesRef.style.height = `${height}px`;
		itemBoxesRef.style.backgroundColor = generatorColor();

		elementArray.push(itemBoxesRef);

		width += 10;
		height += 10;
	}

	boxesRef.append(...elementArray);
	buttonDestroyRef.after(boxesRef);
};

const distroyBoxes = function () {
	[...boxesRef.children].forEach(element => element.remove());
	numberRef.value = '';
};

buttonCreateRef.addEventListener('click', () => createBoxes(Number(numberRef.value)));
buttonDestroyRef.addEventListener('click', distroyBoxes);
