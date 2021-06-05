import * as checkoutView from '../views/checkoutView';
import checkoutModel from '../models/ckeckoutModel';
import * as bestProductsModel from '../models/bestProductsModel';

let relatedProducts;

let products = JSON.parse(localStorage.getItem('cartProducts'));
console.log(products);

products.forEach(currentProduct  =>
{
    checkoutView.renderProduct(currentProduct);
});

checkoutView.renderTotalPrice();

document.querySelector(".checkout__page--js-controller").addEventListener("click", (e) =>
{
    const id = e.target.closest(".checkout__item").dataset.itemid; // get the id of the item you click on
    console.log("id: " + id);


    // handle delete button for each product
    if(e.target.matches(".checkout__item--delete, .checkout__item--delete *"))
    {

        // get product total price to delete it from the totals
        const productTotalPrices = document.querySelector(`[data-itemid="${id}"] .checkout__item--price`).textContent;
        // console.log(parseInt(productTotalPrices), typeof(parseInt(productTotalPrices)));


        deleteItem(id);

        // delete total price and render it again to refrech it
        checkoutView.deleteTotal();
        checkoutView.renderTotalPrice(parseInt(productTotalPrices));
    }


    // handle decrease cound button "-"
    document.querySelector(`[data-itemid="${id}"] .product__form--quantity-minus`).addEventListener("click", () =>
    {
        let quantityText = document.querySelector(`[data-itemid="${id}"] .product__form--quantity-value`);
        // console.log(typeof(quantityText), quantityText);
        quantityText.textContent = parseInt(quantityText.textContent) - 1;
    });

    // handle decrease cound button "+"
    document.querySelector(`[data-itemid="${id}"] .product__form--quantity-plus`).addEventListener("click", () =>
    {
        let quantityText = document.querySelector(`[data-itemid="${id}"] .product__form--quantity-value`);
        // console.log(typeof(quantityText), quantityText);
        quantityText.textContent = parseInt(quantityText.textContent) + 1;
    });

});

document.querySelector(".checkout__page--js").addEventListener("click", e =>
{
    // get related item id when you click on it
    const relatedID = e.target.closest(".checkout__related--item").dataset.relateditemid;
    console.log(relatedID);

    location.href = `product.html?id=${relatedID}`;

});  





// render related Products title
checkoutView.renderRelatedTitle();

checkoutView.renderRelatedProductsContainer();




// remove the item from the local storage and from UI
let deleteItem = (id) =>
{
    const index = products.findIndex (el => el.id === parseInt(id));
    products.splice(index, 1);

    // save the new products in the cart to "cartProducts" local storage
    localStorage.setItem("cartProducts", JSON.stringify(products));

    // remove the product from UI
    checkoutView.deleteItem(parseInt(id));
}


// get products to compare tags
const getProducts = async (productData) =>
{
    let products = new checkoutModel();

    let productResults = [];
    try
    {
        await products.getBestProducts();

        // get the products from the model
        productResults = products.results;

        // console.log(productResults);

        // get related products by sorting
        relatedProducts = sortProducts(productData, productResults);
        // console.log(relatedProducts);

        relatedProducts.forEach(everyProduct =>
        {
            // console.log(everyProduct);
            checkoutView.renderRelatedProduct(everyProduct);
        })


    }
    catch(error)
    {
        console.log(error)
    }
}

// get products that relates to the product
let sortProducts = (product, products) =>
{
    let finalProducts = [];

    product.tags.forEach(cur =>
    {
        products.forEach(curr =>
        {
            curr.tags.forEach(current =>
            {
                if(cur === current)
                {
                    finalProducts.push(curr);
                }
            });     
        });
    });


    // removing duplication
    const filteredArr = finalProducts.reduce((acc, current) => {
    const x = acc.find(item => item.id === current.id);
    if (!x) {
        return acc.concat([current]);
    } else {
        return acc;
    }
    }, []);

    filteredArr.sort(function(a, b){return a.id - b.id});
    // console.log(filteredArr);
    return filteredArr;
}

// render related products
getProducts(products[0]);



