//  --------------------------- Signup page, customer or seller --------------------------- 
var signUpCustomer = document.querySelector(".js--login__choose--active-1");
var signUpSeller = document.querySelector(".js--login__choose--active-2");

var toggleActiveClass = (el1, el2, activeClass) => // for customer-seller signup
{
    if(el1 && el2)
    {
        el1.addEventListener("click", () =>
        {
            if(el2.classList.contains(activeClass))    el2.classList.remove(activeClass);

            el1.classList.toggle(activeClass);
        });
    }
};

toggleActiveClass(signUpCustomer, signUpSeller, "login__choose--active");
toggleActiveClass(signUpSeller, signUpCustomer, "login__choose--active");


// --------------------------- Checkout page,   when you click checkout button to open up the popup --------------------------- 
// checkout--background
var checkoutPage = document.querySelector(".checkout");
var checkoutButton = document.querySelector(".checkout__btn");
var checkoutPopup = document.querySelector(".checkout__popup");
var checkoutClose =document.querySelector(".checkout__popup--close");

if(checkoutButton)
{
    checkoutButton.addEventListener("click", () =>
    {
        if(checkoutButton)
        {
            if(!checkoutPage.classList.contains("checkout--background")) checkoutPage.classList.add("checkout--background");

            checkoutPopup.style.transform = "translate(-50%, -50%) scale(1)";
        }
    });
}
if(checkoutClose)
{
    checkoutClose.addEventListener("click", () =>
    {
        if(checkoutClose)
        {
            checkoutPage.classList.remove("checkout--background");
            // checkoutPopup.style.transition = "all .2s ease-in-out";
            checkoutPopup.style.transform = "translate(-50%, -50%) scale(0)";     
        }
    });
}

// when clicking anywhere, hide the popup
/*if(checkoutPage.classList.contains("checkout--background"))
{
    console.log("hi");
    checkoutPage.addEventListener("click", () =>
    {
        checkoutPage.classList.remove("checkout--background");
        console.log(checkoutPage.classList);
    });
}*/

/*checkoutPage.addEventListener("click", (e) =>
{
    var pageBackground = e.target.closest(".checkout--background");
    pageBackground.addEventListener("click", () =>
    {       
        pageBackground.classList.remove("checkout--background");
    })
})*/




// --------------------------- Display the photo when uploading it(add__item page) --------------------------- 
var loadImage = (event) =>
{
    var addImage = document.querySelector(".add__form--row-img");
    if(addImage)
    {
        addImage.src = URL.createObjectURL(event.target.files[0]);
        addImage.style.display="block";
    }  
};


// --------------------------- Choosing one category(filter page) --------------------------- 
var items = Array.from(document.querySelectorAll(".filter__cat--item"));
if(items)
{
    items.forEach((el) =>
    {
        el.addEventListener("click", () =>
        {
            removeCatClass();
            el.classList.add("filter__cat--item-red");
        })
    });
}

var removeCatClass = () =>
{
    items.forEach(el =>
    {
        if(el.classList.contains("filter__cat--item-red")) el.classList.remove("filter__cat--item-red");
    });
}

// choosing one color and hiding the rest (decreasing thier opacity)
var colors= Array.from(document.querySelectorAll(".js__filter__color"));
if(colors)
{
    colors.forEach((el) =>
    {
        el.addEventListener("click", () =>
        {
            removeColorClassDecreaseOpacity();
            el.classList.add("color-chosen");
            el.style.opacity="1";
        });
    });
}
var removeColorClassDecreaseOpacity = () =>
{
    colors.forEach((el) =>
    {   
        if(el.classList.contains("color-chosen")) el.classList.remove("color-chosen");
        el.style.opacity=".2";
    });
}


// --------------------------- Stichy header --------------------------- 
$(document).ready(function()
{
    $('.header').waypoint(function(direction)
    {
        if($(".header"))
        {
            if (direction == "down") $('.header').addClass('sticky');
            else $('.header').removeClass('sticky');
        }
    },{offset:"-60px"})
});


// --------------------------- Header hide items --------------------------- 
var loginState = "logged"; // logged - notLogged
let headerHideItems = (element) =>
{
    if(element)
    {
        if(!element.classList.contains("header__hide"))
        element.classList.add("header__hide");
    }
}
if(loginState === "notLogged")
{
    // var profileNav = document.querySelector(".js--header__profile--nav");
    // var profileMain = document.querySelector(".js--header__main--profile");
    // headerHideItems(profileNav);
    // headerHideItems(profileMain);
    var items = Array.from(document.querySelectorAll(".js--header__profile--nav, .js--header__main--profile"));
    items.forEach(el =>
    {
       headerHideItems(el);
    });
}
else if(loginState === "logged")
{
    var profileLogin = document.querySelector(".js__header--login");
    headerHideItems(profileLogin);
}





// --------------------------- Click on logo to go to the main page --------------------------- 
document.querySelector(".logo").addEventListener("click", () =>
{
    location.href="./index.html"
})





// --------------------------- Prevent defaults when you click on search svg on the header --------------------------- 
// --------------------------- Show (and hide) the search form --------------------------- 
// --------------------------- change the svg search icon color --------------------------- 


document.querySelector(".js--header__main--profile-link-search").addEventListener("click", (e) =>
{
    e.preventDefault();
    let search =document.querySelector(".header__main--profile-link-search");
    
    if(e.target.matches(".js--header__main--profile-likes, .js--header__main--profile-likes *"))
    {
        if(search.style.display === "block")
        {
            search.style.display = "none";
            document.querySelector(".js--header__main--profile-likes").style.fill="inherit";
        }
        else
        {
            search.style.display = "block";
            document.querySelector(".js--header__main--profile-likes").style.fill="#d94141";
        }
    }
});