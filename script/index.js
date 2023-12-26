const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.querySelector("#cart-button");
  const closeBtn = document.querySelector(".cart-modal__header--close");

  const closeModal = () => {
    modal.classList.remove("open");
  };
  const openModal = () => {
    modal.classList.add("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  closeBtn.addEventListener("click", () => {
    closeModal();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
};

const restFunc = () => {
  const container = document.querySelector("#rest-container");

  const restArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      images: "image.jpg",
    },
    {
      id: 2,
      title: "Тануки",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      images: "tanuki.jpg",
    },
    {
      id: 3,
      title: "FoodBand",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      images: "foodband.jpg",
    },
    {
      id: 4,
      title: "Жадина-пицца",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      images: "Жадина-пицца.jpg",
    },
    {
      id: 5,
      title: "Точка еды",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      images: "Точка еды.jpg",
    },
    {
      id: 6,
      title: "PizzaBurger",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      images: "pizzaBurger.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center">Загрузка</p>';
  };

  const renderRest = (array) => {
    container.innerHTML = "";
    array.forEach((cart) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
      <a href="./goods.html?id=${cart.id}" class="products-card">
      <div class="products-card__image">
        <img src="./images/rests/${cart.images}" alt="" />
      </div>
      <div class="products-card__description">
        <div class="products-card__description--row">
          <h4 class="products-card__description--title">
            ${cart.title}
          </h4>
          <div class="products-card__description--bage">${cart.time} мин</div>
        </div>
        <div class="products-card__description--row">
          <div class="products-card__description--info">
            <div class="products-card__description--info--rating">
              <img src="./images/icons/star.svg" alt="" />${cart.rating}
            </div>
            <div class="products-card__description--info--price">
              От ${cart.price} ₽
            </div>
            <div class="products-card__description--info--group">
            ${cart.type}
            </div>
          </div>
        </div>
      </div>
    </a>
      `
      );
    });
  };

  if (container) {
    loading();

    setTimeout(() => {
      renderRest(restArray);
    }, 1000);
  }
};


const goodsFunc = () => {
    
}

restFunc();
modalFunc();
