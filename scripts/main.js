import { switchTheme, startTheme } from "./modules/swTheme.js";

const url = "https://fakestoreapi.com/products";

const getCategory = async () => {
  let dataArr = new Array();
  await fetch(url)
    .then((responce) => responce.json())
    .then((data) =>
      data.forEach((el) => {
        dataArr.push(el.category);
      })
    );
  const uniqueCategory = Array.from(new Set(dataArr));
  return uniqueCategory;
};

const showCategory = async () => {
  const articleMain = document.querySelector("article");
  const listCategories = document.createElement("ul");
  articleMain.appendChild(listCategories);

  await getCategory().then((data) => {
    data.forEach((cat) => {
      const nameCategory = document.createElement("li");
      const linkCategory = document.createElement("a");
      linkCategory.innerText = cat;
      cat = cat.slice(0, cat.indexOf(" "));

      linkCategory.setAttribute("href", `/sources/categories/${cat}.html`);
      linkCategory.classList.add("theme");
      nameCategory.appendChild(linkCategory);
      listCategories.appendChild(nameCategory);
    });
  });

  startTheme();
};

showCategory();

const btnSwTheme = document.getElementById("swThemeBtn");
btnSwTheme.addEventListener("click", switchTheme);
