const listCategories = document.querySelectorAll("#categories > .item");
console.log(`В списке ${listCategories.length} категории.`);

const showInfo = (item) => {
  console.log(`Категория: ${item.querySelector("h2").textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll("li").length}`);
};

listCategories.forEach((element) => showInfo(element));
