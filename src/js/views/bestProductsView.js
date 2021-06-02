export const clearResList = () => 
{
    document.querySelector(".best__products--page-js").innerHTML="";
    document.querySelector(".paggination").innerHTML="";
}

export let renderProduct = (product) =>
{
    // if(product.bestseller === true)
    // {
    //     const markup = 
    //     `
    //         <div class="col-1-of-4">
    //                     <a href="#" class="card" > <!--layouts/card-->
    //                         <div class="card__img--container">
    //                             <img src="${product.image}" alt="${product.description}" class="card__img--container-img">
    //                             <!--
    //                             <span class="card__img--container-text">20%</span>
    //                             -->
    //                         </div>
    //                         <div class="card__name"> ${product.name}</div>
    //                         <div class="card__price">
    //                             <span class="card__price--discount">${product.price}$</span>
    //                         </div>
    //                     </a>
    //                 </div>
    //     `;

    //     document.querySelector(".best__products--page-js").insertAdjacentHTML('afterbegin', markup);
    // }
    const markup = 
        `
            <div class="col-1-of-4">
                        <a href="#" class="card" > <!--layouts/card-->
                            <div class="card__img--container">
                                <img src="${product.image}" alt="${product.description}" class="card__img--container-img">
                                <!--
                                <span class="card__img--container-text">20%</span>
                                -->
                            </div>
                            <div class="card__name"> ${product.name}</div>
                            <div class="card__price">
                                <span class="card__price--discount">${product.price}$</span>
                            </div>
                        </a>
                    </div>
        `;

        document.querySelector(".best__products--page-js").insertAdjacentHTML('afterbegin', markup);
    
}

// export let renderResults = (products) =>
// {
//     products.forEach((product) => renderProduct(product));
// }


// --------------------------------------paggination -------------------------------------------------










export const renderResults = (products, page = 1, resPerPage = 10) =>
{
    // render results 
    const start = (page-1) * resPerPage;
    const end = page * resPerPage;

    products.slice(start, end).forEach((product) => renderProduct(product));

    // Render pagination button
    renderButton(page, products.length, resPerPage);
}

const renderButton = (page, numResults, resPerPage) =>
{
    const pages = Math.ceil ( numResults / resPerPage);
    let button;

    if(page === 1 && pages > 1)
    {
        // Show only one button pointing to the next page (right)
        button = createButton(page, 'next')
    }
    else if (page < pages)
    {
        // Show 2 button, next and prev
        button =
        `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `
    }
    else if (page === pages && pages > 1)
    {
        // Show one button to prev
        button = createButton(page, 'prev')
    }

    document.querySelector(".paggination").insertAdjacentHTML('afterbegin', button);
}

// type : 'prev' or 'next'
const createButton = (page, type) =>
{
    // return `
    //     <button class="paggination__btn paggination__${type}" data-goto=${type === 'prev' ? page-1 : page+1}>
    //         <span class="paggination__number">page ${type === 'prev' ? page-1 : page+1}</span>
    //         <svg class="paggination__svg">
    //             <use xlink:href="img/sprite.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
    //         </svg>
    //     </button>
    // `;


    // الكود الحقير اللي فوق مش بيرتب الكلام والصورة ... فهنرتبهم في كل حالة
    
    if(type === "next")
    {
        return `
            <button class="paggination__btn paggination__${type}" data-goto=${type === 'prev' ? page-1 : page+1}>
                <span class="paggination__number">page ${type === 'prev' ? page-1 : page+1}</span>
                <img src="img/sprite.svg#icon-triangle-left" alt="sprite"/>
            </button>
            `;
                // <svg class="paggination__svg">
                //     <use xlink:href="img/sprite.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
                // </svg>
    }
    else if(type === "prev")
    {
        return `
            <button class="paggination__btn paggination__${type}" data-goto=${type === 'prev' ? page-1 : page+1}>
                <svg class="paggination__svg">
                    <use xlink:href="img/sprite.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
                </svg>
                <span class="paggination__number">page ${type === 'prev' ? page-1 : page+1}</span>
                
            </button>
        `;
    }

}