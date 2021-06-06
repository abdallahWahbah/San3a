import addItemModel from '../models/addItemModel';

const controlAddItem = async () =>
{

    const input = document.querySelector(".add__item--picture")
    let inputImage = input.files[0];
    
    let addModel = new addItemModel(inputImage)
    try
    {
        await addModel.addNewItem();

        // go to the home page
        // window.location.href="./index.html";

    }
    catch(error)
    {
        console.log(error);
    }

}

document.querySelector(".additem__page--add-product-js").addEventListener("click", (e) =>
{
    e.preventDefault();

    let itemName = document.querySelector(".add__item--name-js").value;
    let itemQuantity = document.querySelector(".add__item--quantity-js").value;
    let itemPrice = document.querySelector(".add__item--price-js").value;
    let itemSpecifications = document.querySelector(".add__item--spec-js").value;
    let itemImplementationTime = document.querySelector(".add__item--time-js").value; // we will treat this as tags, tell the user to enter tags separated by spaces or commas, and split the whole string on commas or spaces
    let itemDeliveryService = document.querySelector(".add__item--delivery-js").value;  // we will treat this as slug
    let itemImage = document.querySelector(".add__item--picture");


    
    controlAddItem();


});
