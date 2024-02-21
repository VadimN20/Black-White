const url = "https://fakestoreapi.com/products";

const article = document.querySelector("article");

fetch(url)
  .then((resolve) => resolve.json())
  .then((data) =>
    data.map((el) => {
      console.log(el);
      const sec = document.createElement("section");
      const nameProd = document.createElement("p");
      const price = document.createElement("p");
      const imgProd = document.createElement("img");
      const btn = document.createElement("button");

      nameProd.innerText = el.title;
      price.innerText = el.price + "$";
      btn.innerText = "buy";

      imgProd.src = el.image;
      sec.appendChild(imgProd);
      sec.appendChild(nameProd);
      sec.appendChild(price);
      sec.appendChild(btn);

      article.appendChild(sec);
    })
  );
