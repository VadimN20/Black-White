import { switchTheme, startTheme } from "./swTheme.js";

const url = "https://fakestoreapi.com/products";

const category = document.querySelector("h1").textContent;

const showCategories = async () => {
  await fetch(url)
    .then((resolve) => resolve.json())
    .then((data) =>
      data.forEach((el) => {
        if (
          el.category.slice(0, el.category.indexOf(" ")) ===
          category.toLowerCase()
        ) {
          const ourProd = document.querySelector("article");

          const sec = document.createElement("section");
          const nameProd = document.createElement("p");
          const price = document.createElement("p");
          const imgProd = document.createElement("img");
          const btn = document.createElement("button");

          const hideInfo = document.createElement("div");
          hideInfo.classList.add("hideInfo");
          btn.classList.add("theme");

          nameProd.innerText = el.title;
          price.innerText = el.price + "$";
          btn.innerText = "Add to bag";

          imgProd.src = el.image;

          sec.appendChild(imgProd);
          hideInfo.appendChild(nameProd);
          hideInfo.appendChild(price);
          hideInfo.appendChild(btn);
          sec.appendChild(hideInfo);

          ourProd.appendChild(sec);
        }
      })
    );

  startTheme();
};

showCategories();

const btnSwTheme = document.getElementById("swThemeBtn");
btnSwTheme.addEventListener("click", switchTheme);
