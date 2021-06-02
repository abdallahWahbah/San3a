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

getProducts();