(()=>{
  const cartItems = [];
  const cartButton = document.querySelector("span.cart-icon");
  const closeCartButton = document.querySelector("span.close-icon");
  const addButton = document.querySelectorAll("[data-add-product");
  const cartProducts = document.querySelector(".cart__products");
  
  const createCartItem = (item = {quantity: 1 }) => {
      //cria todas as divs
    const cartProducts =   document.createElement("div");
    const cartProduct = document.createElement("div");
    const productImage =  document.createElement("div");
    const productDetails = document.createElement("div");
    const productPrice = document.createElement("div");
    const quantProduct = document.createElement("div");
    const productTitle = document.createElement("div");
    const producRemove = document.createElement("div");

      //adiciona clases as suas respectivas divs
    cartProducts.classList.add('cart__products');
    cartProduct.classList.add('cart__product');
    productImage.classList.add('cart__product-image');
    productDetails.classList.add('cart__product-details');
    productTitle.classList.add('cart__product-title');
    productPrice.classList.add('cart__product-prince');
    quantProduct.classList.add('quantprod');
    producRemove.classList.add('product__remove');

    //cria todos os spans
    const closeIcon = document.createElement("span");
    const removeIcon = document.createElement("span");
    const quantity = document.createElement("span");
    const addIcon = document.createElement("span");
    
    //adiciona classes ao spans
    closeIcon.classList.add("close-icon");
    removeIcon.classList.add("remove-icon");
    quantity.classList.add("quantity");
    addIcon.classList.add("add-icon");

  
    //imagem do produto
    const image = document.createElement("img");
    image.src = "../img/produtos/page3/café-espresso-ameno.jpg";
    productImage.appendChild(image);
    
    //quando criado eles irão receber o valor destacado
    closeIcon.innerText = "close";
    removeIcon.innerText = "remove";
    addIcon.innerText = "add";
    quantity.innerText = item.quantity;
    
    //começa a modelar, aqui definimos a ordem das divs spans oq vai dentro de onde começa a modelar o codigo.
    producRemove.appendChild(closeIcon);
    productDetails.appendChild(productTitle);
    productDetails.appendChild(productPrice);
    productDetails.appendChild(removeIcon);
    productDetails.appendChild(quantity);
    productDetails.appendChild(addIcon);

    //quando criado eles irão receber o valor destacado
    productTitle.innerText = "Kit capsula Café";
    productPrice.innerText = "R$ 50,00";
    
    //começa a modelar, aqui definimos a ordem das divs spans oq vai dentro de onde começa a modelar o codigo.
    cartProduct.appendChild(producRemove);
    cartProduct.appendChild(productImage);
    cartProduct.appendChild(productDetails);
    cartProducts.appendChild(cartProduct);
    
    
  //constante para remover o iten criado com as funções acima 
  const removeItem = (e) => {
      const element = e.target;
      const parentProduct = element.closest(".cart__product");
      const cartProducts = document.querySelector(".cart__products");
      const itemIndex = cartItems.findIndex(
        (element) => element === parentProduct
      );

      cartProducts.appendChild(parentProduct);
      cartProducts.removeChild(parentProduct);
      cartItems.splice(itemIndex, 1);
      updateTotals(cartItems, item, "remove");
      toggleItems(cartItems);
    };
    
    //criação de evento e algumas funções pra melhorar o funcionamento na hr de remover o item criado
    closeIcon.addEventListener("click", removeItem);

    removeIcon.addEventListener("click", (e) => {
      const target = e.target;
      const quantityElement = target.parentElement.querySelector(".quantity");

      item.quantity = item.quantity - 1;

      quantityElement.innerText = item.quantity;

      if (item.quantity === 0) {
        item.quantity = 1;
        removeItem(e);
      } else {
        updateTotals(cartItems, item, "decrement");
      }
    });

    addIcon.addEventListener("click", (e) => {
      const target = e.target;
      const quantityElement = target.parentElement.querySelector(".quantity");

      item.quantity = item.quantity + 1;

      quantityElement.innerText = item.quantity;
      updateTotals(cartItems, item, "increment");
    });


    return cartProducts;
  }
 


  const toggleItems = (cartItems) => {
  const emptyCartElements = document.querySelectorAll("[data-empty-cart");
  const notEmptyCartElements = document.querySelectorAll("[data-not-empty-cart");
  //Caso o carrinho esteja vazio mostrar os elementos
  if (cartItems.length === 0){
      
      emptyCartElements.forEach((element) => {
          element.style.display = "block";
      })
      notEmptyCartElements.forEach((element) => {
          element.style.display = "none";
      })
  //se tiver algum item esconder os elementos
  } else  {
      emptyCartElements.forEach((element) => {
          element.style.display = "none";
      })
      notEmptyCartElements.forEach((element) => {
          element.style.display = "flex";
      })
  }
  }

  const openCart = () => {
      const cart = document.querySelector(".cart");
  
      cart.style.display = "block";
    };
  
    //constante para transforma um numero em string ou string em numero n lembro kkk
    const extractMoneyValue = (string) => {
      return Number(string.split("$")[1]);
    };
  
    
    const updateTotals = (cartItems, item, action = "add") => {
      const totalItems = document.querySelector(".cart__total-value");
      const subTotal = document.querySelector("[data-subtotal]");
      const grandTotal = document.querySelector("[data-grand-total]");
      const subTotalValue = extractMoneyValue(subTotal.innerText);
      const grandTotalValue = extractMoneyValue(subTotal.innerText);
      const quantityActions = ["increment", "decrement"];
      const remove = ["remove", "decrement"].includes(action);
      const itemTotalValue = quantityActions.includes(action)
        ? item.price
        : item.quantity * item.price;
      const newSubTotalValue = remove
        ? subTotalValue - itemTotalValue
        : subTotalValue + itemTotalValue;
      const newGrandTotalValue = remove
        ? grandTotalValue - itemTotalValue
        : grandTotalValue + itemTotalValue;
  
      totalItems.innerHTML = cartItems.length;
  
      subTotal.innerText = `$${newSubTotalValue.toFixed(2)}`;
      grandTotal.innerText = `$${newGrandTotalValue.toFixed(2)}`;
    };
   
    addButton.forEach((button) => {
      button.addEventListener("click", () => {
        const item = {
          title: "Cotton dress",
          price: 50.0,
          quantity: 1,
        };
        const newCartItem = createCartItem(item);
  
        cartItems.push(newCartItem);
        cartProducts.appendChild(newCartItem);
        toggleItems(cartItems);
        openCart();
        updateTotals(cartItems, item);
      });
    });
    
    toggleItems(cartItems);

  

  
  // Ao clicar no cartButton a gente abre o carrinho
cartButton.addEventListener("click", openCart);

// Ao clicar no closeCartButton a gente esconde o carrinho
closeCartButton.onclick = () => {
  const cart = document.querySelector(".cart");

  cart.style.display = "none";
};


 
  
})()