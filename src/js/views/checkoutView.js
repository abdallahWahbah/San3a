let totalPrice=0;
export let renderProduct = (product) =>
{
    let Cities = ["Giza", "Ismailia", "October", "Alexandrie", "Fayoum", "Cairo", "Herghada"]
    let count = Math.ceil(Math.random()*6);
    totalPrice += count * product.price;
    let markup =
    `
        <div class="checkout__item" data-itemid = ${product.id}>
                <img src="${product.image}" alt="${product.name}" class="checkout__item--img">

                <div class="checkout__item--details">
                    <h1 class="checkout__item--name">${product.name}</h1>
                    <h3 class="checkout__item--from">Shoppimg from: <span class="checkout__item--city">${Cities[Math.floor(Math.random() * Cities.length)]}</span></h3>
                    <h3 class="checkout__item--save">Save for later</h3>
                </div>
                
                <form action="#" class="product__form"> 
                    <div class="product__form--container">
                        <div class="product__form--quantity">
                            <div class="product__form--quantity-minus">&minus;</div>
                            <div class="product__form--quantity-value">${count}</div>
                            <div class="product__form--quantity-plus">+</div>
                        </div>
                    </div>
                </form>

                <h1 class="checkout__item--price">${count * product.price}$</h1>

                <div class="checkout__item--delete">
                    <div class="checkout__item--delete-icon">x</div>
                </div>
            </div>

            <hr class="checkout__line">
    `;
    document.querySelector(".checkout__page--js").insertAdjacentHTML("beforeend", markup);
}

export let renderTotalPrice = (oneProductTotalPrice = 0) =>
{
    totalPrice -= oneProductTotalPrice;
    let markup = 
    `
        <h1 class="checkout__total">Total price: <span class="checkout__total--price">${totalPrice}$</span></h1>
    `;
    document.querySelector(".checkout__page--js").insertAdjacentHTML("beforeend", markup);
}

export const deleteItem = id =>
{
    const item = document.querySelector(`[data-itemid="${id}"]`);
    item.parentElement.removeChild(item);
}

export const deleteTotal = () =>
{
    const item = document.querySelector(".checkout__total");
    item.parentElement.removeChild(item);
}

export let renderRelatedTitle = () =>
{
    let markup =
    `
        <h1 class="checkout__offer">Customers who bought items in your cart also bought: </h1>
    `;
    document.querySelector(".checkout__page--js").insertAdjacentHTML("beforeend", markup);
};

export let renderRelatedProductsContainer = () =>
{
    let markup =
    `
        <div class="row js--offers checkout__related--products"> 
        </div>
    `;
    document.querySelector(".checkout__page--js").insertAdjacentHTML("beforeend", markup);
}

export let renderRelatedProduct = (product) =>
{
    let markup=
    `
        <div class="col-1-of-4 checkout__related--item" data-relateditemid = ${product.id}>
            <a href="#" class="card" > 
                <div class="card__img--container">
                    <img src="${product.image}" alt="${product.name}" class="card__img--container-img">
                </div>
                <div class="card__name">${product.name}</div>
                <div class="card__price">
                    <span class="card__price--discount">${product.price}$</span>
                </div>
            </a>
            
        </div>
    `;
    document.querySelector(".checkout__related--products").insertAdjacentHTML("afterbegin", markup);

}