export const renderImage = (product) =>
{
    const markup =
    `
        <img src="${product.image}" alt="${product.name}" class="product__img--container-img-big">
    `;

    document.querySelector(".product__img--container").insertAdjacentHTML("afterbegin", markup);
}

export const renderNamePriceDetails = (product) =>
{
    const markup =
    `
        <h1 class="product__name">${product.name}</h1>

        <h1 class="product__price">${product.price}$</h1>

        <hr>

        <p class="product__description">${limitDescription(product.description)}</p>

        <hr>

    `;

    document.querySelector(".product__right").insertAdjacentHTML('afterbegin', markup);
}

export const limitDescription = (desc, limit = 170) =>
{
    if(desc.length > limit)
    {
        return desc.substring(0, limit) + " ...";
    }

    return desc;
}

export const renderDetailedParagraph = (product) =>
{
    const markup =
    `
        <p class="product__desc--detailed">
            ${product.description}
        </p>
    `;

    document.querySelector(".product__desc--detailed").insertAdjacentHTML('afterbegin', markup);
}