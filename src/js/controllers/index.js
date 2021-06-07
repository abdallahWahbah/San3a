// console.log(localStorage.getItem("token"));
import bestProductsModel from '../models/bestProductsModel';
import productModel from '../models/productModel';
import * as indexView from '../views/indexView';

// render products to "Our Products section"
const getProducts = async () =>
{
    let products = new bestProductsModel();

    try
    {
        await products.getBestProducts();

        // get the products from the model
        let productResults = products.results;

        // pass products to indexView
        console.log(productResults);

        for (let index = 0; index < 16; index++) 
        {
            indexView.renderProduct(productResults[index]); 
        }
    }
    catch(error)
    {
        console.log(error);
    }
}
getProducts();

// load more products by going to (best) products page
document.querySelector(".out__products--load-more-js").addEventListener("click", () =>
{
    location.href = "bestProducts.html";
});


// handle clicking on product to move to product page or to add to cart page
document.querySelector(".our__products--index-js").addEventListener("click", (e) =>
{
    // go to product page and preview the product
    if(e.target.closest(".our__products--product-card"))
    {
        let id = e.target.closest(".our__products--product-card").dataset.itemid;
        location.href = `product.html?id=${id}`;
        console.log(id, typeof(id));
    }
    

    // go to cart page and add the item to the cart
    if(e.target.closest(".card__cart--container--btn"))
    {
        let cartItemID = e.target.closest(".card__cart--container--btn").dataset.cartitemid;
        console.log(cartItemID);

        // get the product and pass it to cart page
        controlProduct(cartItemID);
        

    }
    
});


const controlProduct = async (cartItemID) =>
{
    let prod = new productModel(cartItemID); 

    try
    {
        await prod.getProduct();
        let product = prod.product.data; // " `let` in es6 " enables you to change the variable datatype
        console.log(product);

        addProductToCart(product);
    }
    catch(error)
    {
        console.log(error);
    }
}

let addProductToCart = (product) =>
{
    // adding produt to cart list
    let cartProducts = [];
    let cartProductsssss = JSON.parse(localStorage.getItem('cartProducts'));
    if(cartProductsssss == null)
    {
        console.log("empty localStorage");
        cartProducts.push(product);
    } 
    else
    {
        cartProducts.push(product);
        cartProductsssss.forEach(current =>
        {
            cartProducts.push(current);
        }); 
    }
    

    // removing duplication
    const filteredArr = cartProducts.reduce((acc, current) => {
    const x = acc.find(item => item.id === current.id);
    if (!x) {
        return acc.concat([current]);
    } else {
        return acc;
    }
    }, []);

    filteredArr.sort(function(a, b){return a.id - b.id});

    // adding produt to cart list
    localStorage.setItem("cartProducts", JSON.stringify(filteredArr));
    cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    console.log(cartProducts);        

    location.href = `cart.html`;
}



// handle clicking on category to move to filter page and filter the products with that category
document.querySelector(".top__cat--index-js").addEventListener("click", (e) =>
{
    // go to product page and preview the product
    if(e.target.closest(".category--index-js"))
    {
        let category = e.target.closest(".category--index-js").dataset.cat;
        location.href = `filter.html?category=${category}`;
        console.log(category, typeof(category));
    }    
});