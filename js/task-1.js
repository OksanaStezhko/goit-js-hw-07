const listCategories = document.querySelector('#categories');
const itemsListCategories = Array.from(listCategories.children);
console.log(`В списке ${itemsListCategories.length} категории.`);

const showInfo = item => {
	console.log(`Категория: ${item.querySelector('h2').textContent}`);
	console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
};

itemsListCategories.forEach(element => showInfo(element));
