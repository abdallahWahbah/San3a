import bestProductsModel from '../models/bestProductsModel';
import * as bestProductView from '../views/bestProductsView';

const getProducts = async () =>
{
    let products = new bestProductsModel();

    try
    {
        await products.getBestProducts();

        // get the products from the model
        let productResults = products.results;

        // pass products to productsView
        console.log(productResults);
        bestProductView.renderResults(productResults);


        // next and prev buttons
        document.querySelector(".paggination").addEventListener("click", (e) =>
        {
            let btn = e.target.closest(".paggination__btn");
            if(btn)
            {
                const gotoPage = parseInt(btn.dataset.goto, 10); // 10 is decimal
                console.log(gotoPage);

                bestProductView.clearResList();
                bestProductView.renderResults(productResults, gotoPage);
            }
        })
    }
    catch(error)
    {
        console.log(error);
    }
}

// handle clicking on product to move to product page
document.querySelector(".best__products--page-js").addEventListener("click", (e) =>
{
    let id = e.target.closest(".best__products--page-item-js").dataset.itemid;
    location.href = `product.html?id=${id}`;
    // console.log(id, typeof(id));
});

getProducts();