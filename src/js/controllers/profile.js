import profileModel from "../models/profileModel";
import * as profileView from '../views/profileView';

let checkoutOrders = JSON.parse(localStorage.getItem('checkout'));
// console.log(checkoutOrders);
let ordersShown = false; // to indicate if we presented the orders or not, so that we don't show them multiple time when clicking on orders


const controlProduct = async () =>
{
    let profile = new profileModel(); 

    try
    {
        await profile.getProfile();
        
        let profileData = profile.profileData;
        // console.log(profileData);

        // render profile username, email and image
        profileView.renderProfileNameEmail(profileData);
        // profileView.renderProfileImage(profileData);


        // click on orders to show orders below the white square
        document.querySelector(".profile__clicks--header-orders").addEventListener("click", () =>
        {
            if(ordersShown === false)
            {
                renderOrders(checkoutOrders);
            }
            ordersShown = true;
        });
        

    }
    catch(error)
    {
        console.log(error);
    }
}
controlProduct();

let renderOrders = (checkoutOrders) =>
{
    checkoutOrders.forEach(order =>
    {
        profileView.renderOrder(order);  
    })
};