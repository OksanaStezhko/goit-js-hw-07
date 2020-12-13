const ingredients = [
	'Картошка',
	'Грибы',
	'Чеснок',
	'Помидоры',
	'Зелень',
	'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const createItems = item => {
	const itemRef = document.createElement('li');
	itemRef.classList.add('ingredients__item');
	itemRef.textContent = item;
	return itemRef;
};

ingredientsRef.append(...ingredients.map(elem => createItems(elem)));
