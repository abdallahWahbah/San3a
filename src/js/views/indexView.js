
export let renderProduct = (product) =>
{
    let markup =
    `
        <div class="col-1-of-4 our__products--product">
            <a class="card our__products--product-card" data-itemid = ${product.id} >
                <div class="card__img--container">
                    <img src="${product.image}" alt="${product.name}" class="card__img--container-img">
                </div>
                <div class="card__name">${product.name}</div>
                <div class="card__price">
                    <span class="card__price--discount">120$</span>
                </div>
            </a>
            <div class="card__cart--container">
                <a class="btn btn--white btn--hover-red card__cart--container--btn" data-cartitemid = ${product.id}>Add to cart</a>
                <svg class="card__cart--container--svg">
                    <use xlink:href="sprite.svg#icon-heart-outlined"></use>
                </svg>
            </div>
        </div>
    `;
    document.querySelector(".our__products--index-js").insertAdjacentHTML("afterbegin", markup);
};