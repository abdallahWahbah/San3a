export let renderHeader = () =>
{
    let markup =
    `
        <h2 class="heading__secondary">Shopping Cart</h2>
    `;
    document.querySelector(".cart__page--js").insertAdjacentHTML("afterbegin", markup);

}

let totalPrice=0;
export let renderProduct = (product) =>
{
    let count = Math.ceil(Math.random()*6);

    totalPrice += count * product.price;

    let markup = 
    `
        <div class="cart__item" data-itemid = ${product.id}>
            <img src="${product.image}" alt="${product.name}" class="cart__item--photo">
            <div class="cart__item__typo--container">
                <div class="cart__item--col-container">
                    <div class="cart__item--col-name">${product.name}</div>
                    <p class="cart__item--paragraph">${limitDescription(product.description)}</p>
                </div>
                <div class="cart__item--col-container">
                    <div class="cart__item--col-name">Price</div>
                    <div class="cart__item--price">${product.price}</div>
                </div>
                <div class="cart__item--col-container">
                    <div class="cart__item--col-name">Quantity</div>
                    <div class="cart__item--quantity">${count}</div>
                </div>
                <div class="cart__item--col-container">
                    <div class="cart__item--col-name">Total</div>
                    <div class="cart__item--total">${count * product.price}$</div>
                </div>
                <div class="cart__item--col-container">
                    <div class="cart__item--col-name">&nbsp;</div>
                    <div class="cart__item--delete">&cross;</div>
                </div>
            </div>        
        </div>
        
        <hr>
    `;

    document.querySelector(".cart__page--js").insertAdjacentHTML("beforeend", markup);
}

const limitDescription = (desc, limit = 100) =>
{
    if(desc.length > limit)
    {
        return desc.substring(0, limit) + " ...";
    }
    else if(desc.length < 100)
    {
        return desc + `
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        `;
    }
    // return desc;
}

export const renderCartTotalButtons = () =>
{
    let markup =
    `
        <div class="cart__total">
            <div class="cart__total__typo">
                <div class="cart__total__typo--text">Total price: </div>
                <div class="cart__total__typo--value">${totalPrice}$</div>
            </div>

            <div class="cart__total--buttons">
                <div class="btn btn--white">Update</div>
                <div class="btn btn--red cart__checkout--js">Checkout</div>
            </div>
        </div>
    `;
    document.querySelector(".cart__page--js").insertAdjacentHTML("beforeend", markup);
}

export const deleteItem = id =>
{
    const item = document.querySelector(`[data-itemid="${id}"]`);
    item.parentElement.removeChild(item);
}