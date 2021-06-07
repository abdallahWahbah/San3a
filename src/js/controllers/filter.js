import bestProductsModel from '../models/bestProductsModel';
import productModel from '../models/productModel';
import * as filterView from '../views/filterView';

const category = new URLSearchParams(location.href.split('?')[1]).get('category');
const inputSearch = new URLSearchParams(location.href.split('?')[1]).get('input');
let categoryList = [], productList=[], filteredPriceList = [];

if(category)
{
    // console.log(category);
    if(category.includes("%20"))
    {
        category.replace("%20", "");
        getProducts();
    }
}
// render products to "Our Products section"
const getProducts = async () =>
{
    let products = new bestProductsModel();

    try
    {
        await products.getBestProducts();

        // get the products from the model
        let productResults = products.results;
        // console.log(productResults);

        // if you came from header search
        if(inputSearch)
        {
            productResults.forEach(current =>
            {
                if(current.name.includes(inputSearch))
                {
                    productList.push(current);
                }  
            })
            // console.log(productList);
            if(productList.length !== 0)
            {
                productList.forEach(cur =>
                {
                    filterView.renderProduct(cur);
                    console.log(cur.price);
                });
            }
        }
        // if you  came from the index page >> Top categories
        else if(category)
        {
            productResults.forEach(current =>
            {
                if(current.product_category === category)
                {
                    categoryList.push(current);                    
                }  
            })
            // console.log(categoryList);
            if(categoryList.length !== 0)
            {
                categoryList.forEach(cur =>
                {
                    filterView.renderProduct(cur); 
                });
            }
        }
    }
    catch(error)
    {
        console.log(error);
    }
}
getProducts();


// handle clicking on product to move to product page or to add to cart page
document.querySelector(".filter__container--page-js").addEventListener("click", (e) =>
{
    // go to product page and preview the product
    if(e.target.closest(".our__products--product-card"))
    {
        let id = e.target.closest(".our__products--product-card").dataset.itemid;
        location.href = `product.html?id=${id}`;
        // console.log(id, typeof(id));
    }
    

    // go to cart page and add the item to the cart
    if(e.target.closest(".card__cart--container--btn"))
    {
        let cartItemID = e.target.closest(".card__cart--container--btn").dataset.cartitemid;
        // console.log(cartItemID);

        // get the product and pass it to cart page
        controlProduct(cartItemID);
    }
});



// copied code from index controller, you can export it from there (index) after final exams 
const controlProduct = async (cartItemID) =>
{
    let prod = new productModel(cartItemID); 

    try
    {
        await prod.getProduct();
        let product = prod.product.data; // " `let` in es6 " enables you to change the variable datatype
        // console.log(product);

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

// prepare Min and MAx price values' UI
let minPrice = document.querySelector(".range__min").value;
document.querySelector(".filter__price--container-min").textContent = "min: " + minPrice;
let maxPrice = document.querySelector(".range__max").value;
document.querySelector(".filter__price--container-max").textContent ="max: " + maxPrice;


document.querySelector(".range__min").addEventListener("change", () =>
{
    document.querySelector(".filter__price--container-min").textContent = "min: " + document.querySelector(".range__min").value;
});
document.querySelector(".range__max").addEventListener("change", () =>
{
    document.querySelector(".filter__price--container-max").textContent = "max: " + document.querySelector(".range__max").value;
});


// click on filter to filter hahaha
document.querySelector(".filter__price--container-filter").addEventListener("click", () =>
{
    let min = parseInt(document.querySelector(".range__min").value);
    let max = parseInt(document.querySelector(".range__max").value);

    filteredPriceList.length=0;

    // if you are came from the header search and the list is not empty
    if(productList.length !== 0)
    {        
        productList.forEach(current =>
        {
            if(current.price >= min && current.price <= max)
            {
                filteredPriceList.push(current);
            }
        })
        if(filteredPriceList.length !== 0)
        {
            filterView.eraseProducts();
            filteredPriceList.forEach(cur =>
            {
                filterView.renderProduct(cur); 
            });
        }
        console.log(filteredPriceList);
    }
    // if you  came from the index page >> Top categories and the list is not empty
    else if(categoryList.length !== 0)
    {
        categoryList.forEach(current =>
        {
            if(current.price >= min && current.price <= max)
            {
                filteredPriceList.push(current);
            }
        })
        if(filteredPriceList.length !== 0)
        {
            filterView.eraseProducts();
            filteredPriceList.forEach(cur =>
            {
                filterView.renderProduct(cur); 
            });
        }
        console.log(filteredPriceList);
    }
});