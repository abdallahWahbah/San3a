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
            if(checkoutPage)
            checkoutPage.classList.remove("checkout--background");
            // checkoutPopup.style.transition = "all .2s ease-in-out";
            if(checkoutPopup)
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

// --------------------------- Product page --------------------------- 
// --------------------------- choosing one color and hiding the rest (decreasing thier opacity) --------------------------- 
 
var colors= Array.from(document.querySelectorAll(".js--product__form--colors"));
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
        el.style.opacity=".4";
    });
}

// --------------------------- Product page / increasing and decreasing number --------------------------- 

var productFormContainers = Array.from(document.querySelectorAll(".product__form--container"));
productFormContainers.forEach(current =>
{
    current.addEventListener("click", e =>
    {

        let quantityText = document.querySelector(".product__form--quantity-value");
        let quantity = parseInt(quantityText.textContent);
        let sizeText = document.querySelector(".product__form--size-value");
        let size;
        if(sizeText) size = parseInt(sizeText.textContent);

        if(e.target.matches(".product__form--quantity-minus, .product__form--quantity-minus *"))
        {
            
            if(parseInt(quantityText.textContent) <=0 )
            {
                quantity = 0;
                quantityText.textContent = "0";
            } 
            else
            {
                quantity--;
                quantityText.textContent = quantity.toString();
            }
        }
        else if(e.target.matches(".product__form--quantity-plus, .product__form--quantity-plus *"))
        {
            if( !(parseInt(quantityText.textContent) >= 9))
            {
                quantity++;
                quantityText.textContent = quantity.toString();
            }
        }
        else if(e.target.matches(".product__form--size-minus, .product__form--size-minus *"))
        {
            
            if(parseInt(sizeText.textContent) <=0 )
            {
                size = 0;
                sizeText.textContent = "0";
            } 
            else
            {
                size--;
                sizeText.textContent = size.toString();
            }
        }
        else if(e.target.matches(".product__form--size-plus, .product__form--size-plus *"))
        {
            if( !(parseInt(sizeText.textContent) >= 9))
            {
                size = size + 2;
                sizeText.textContent = size.toString();
            }
        }
    })
})

// --------------------------- Product page / normal heart to outlined one when clicking on it(like product) --------------------------- 
let productLikeLink = document.querySelector(".product__like--link");
if(productLikeLink)
{
    productLikeLink.addEventListener("click", e =>
    {
        e.preventDefault();
        if(e.target.matches(".product__like, .product__like *"))
        {
            document.querySelector(".product__like--2").style.display = "block";
            document.querySelector(".product__like").style.display = "none";
        }
        else if(e.target.matches(".product__like--2, .product__like--2 *"))
        {
            document.querySelector(".product__like").style.display = "block";
            document.querySelector(".product__like--2").style.display = "none";
        }
    })
}

// --------------------------- Product page / Switch between decription and reviews / limit description--------------------------- 
let productDescription = document.querySelector(".product__desc--header");
let productReviews = document.querySelector(".product__reviews--header");
let productDescriptionShort = document.querySelector(".product__description");
let productDescriptionLong = document.querySelector(".product__desc--detailed");
let productReviewDescriptions = Array.from(document.querySelectorAll(".product__reviews--review-paragraph"));
if(productDescription)
{
    productDescription.addEventListener("click", () =>
    {
        productDescription.style.color = "#d94141";
        productReviews.style.color = "#333";
        document.querySelector(".product__reviews").style.display = "none";
        document.querySelector(".product__desc--detailed").style.display = "block";
    });
}
if(productReviews)
{
    productReviews.addEventListener("click", () =>
    {
        productReviews.style.color = "#d94141";
        productDescription.style.color = "#333";
        document.querySelector(".product__desc--detailed").style.display = "none";
        document.querySelector(".product__reviews").style.display = "block";
    });
}
if(productDescriptionShort)
{
    if(productDescriptionShort.textContent.length > 150 )
    {
        let shortDesc = productDescriptionShort.textContent.substring(0, 150);
        productDescriptionShort.textContent = shortDesc + "...........";
    }
}
if(productDescriptionLong)
{
    if(productDescriptionLong.textContent.length > 500 )
    {
        let shortDesc = productDescriptionLong.textContent.substring(0, 500);
        productDescriptionLong.textContent = shortDesc + "...........";
    }
}
if(productReviewDescriptions)
{
    productReviewDescriptions.forEach(cur =>
    {
        if(cur.textContent.length > 650 )
        {
            console.log(cur.textContent.length)
            let shortDesc = cur.textContent.substring(0, 650);
            cur.textContent = shortDesc + "...........";
        }
    })
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
// var loginState = "notLogged"; // logged - notLogged
let userToken = localStorage.getItem("token");
let headerHideItems = (element) =>
{
    if(element)
    {
        if(!element.classList.contains("header__hide"))
        element.classList.add("header__hide");
    }
}
// if(loginState === "notLogged")
if(userToken === "")
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
// else if(loginState === "logged")
else
{
    var profileLogin = document.querySelector(".js__header--login");
    headerHideItems(profileLogin);
}






// --------------------------- Click on logo to go to the main page --------------------------- 
if(document.querySelector(".logo"))
{
    document.querySelector(".logo").addEventListener("click", () =>
    {
        location.href="./index.html"
    })
}






// --------------------------- Prevent defaults when you click on search svg on the header --------------------------- 
// --------------------------- Show (and hide) the search form --------------------------- 
// --------------------------- change the svg search icon color --------------------------- 

if(document.querySelector(".js--header__main--profile-link-search"))
{
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
}


// --------------------------- Profile page / change header svg profile icon color --------------------------- 

// do your best


// --------------------------- Checkout page /  choose between checkout and payment--------------------------- 

let checkName = document.querySelector(".js--checkout__name-check");
let paymentName = document.querySelector(".js--checkout__name-payment");
if(paymentName)
{
    paymentName.addEventListener("click", () =>
    {
        let items = Array.from(document.querySelectorAll(".checkout__item"));
        let deletes = [
            ...items,
            ...Array.from(document.querySelectorAll(".checkout__line")),
            document.querySelector(".checkout__total"),
            document.querySelector(".checkout__offer"),
            document.querySelector(".js--offers")
        ];
        deletes.forEach(current =>
        {
            current.style.display = "none";
        })
        paymentName.style.color = "#d94141";
        checkName.style.color = "#333339";

        document.querySelector(".js--payment").style.display = "flex";
    });
}
if(checkName)
{
    checkName.addEventListener("click", () =>
    {
        if(document.querySelector(".js--payment"))
        {
            document.querySelector(".js--payment").style.display = "none";
        }
        checkName.style.color = "#d94141";
        paymentName.style.color = "#333339";

        let items = Array.from(document.querySelectorAll(".checkout__item"));
        items.forEach(current =>
        {
            current.style.display = "flex";
        });

        Array.from(document.querySelectorAll(".checkout__line")).forEach(current =>
        {
            current.style.display = "block";  
        })
        document.querySelector(".checkout__total").style.display = "block";
        document.querySelector(".checkout__offer").style.display = "block";
        document.querySelector(".js--offers").style.display = "flex";
    });
}




// --------------------------- filter page / collapsible button--------------------------- 
// this object is used to use the character enityty in js
// you can fing the whole html entities from here https://www.freeformatter.com/html-entities.html
window.htmlentities = {
    /**
     * Converts a string to its html characters completely.
     *
     * @param {String} str String with unescaped HTML characters
     **/
    encode : function(str) {
        var buf = [];
        
        for (var i=str.length-1;i>=0;i--) {
            buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
        }
        
        return buf.join('');
    },
    /**
     * Converts an html characterSet into its original character.
     *
     * @param {String} str htmlSet entities
     **/
    decode : function(str) {
        return str.replace(/&#(\d+);/g, function(match, dec) {
            return String.fromCharCode(dec);
        });
    }
};

var collapsibles = Array.from(document.querySelectorAll(".filter__container--header"));
if(collapsibles)
{
    for (let i = 0; i<collapsibles.length; i++ )
    {
        let coll = collapsibles[i];
        coll.addEventListener("click", (e) =>
        {
            var details = coll.nextElementSibling;
            if(details.style.display === "block")
            {
                details.style.display = "none";
                coll.children[1].textContent = htmlentities.decode("&#8744;");
            }
            else
            {
                details.style.display = "block";
                coll.children[1].textContent = htmlentities.decode("&#8743;");
            }
        });
    }
}



// --------------------------- filter page / collapsible button--------------------------- 


if(document.querySelector(".header__search--js"))
{
    document.querySelector(".header__search--js").addEventListener("click", () =>
    {
        let input = document.querySelector(".header__search--input-js").value;
        location.href = `filter.html?input=${input}`;
        console.log(input);
    });
}