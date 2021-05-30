import loginModel from '../models/loginModel';


let loginName = document.querySelector(".form__input--login--name-js");
let loginEmail = document.querySelector(".form__input--login--email-js");
let loginPass = document.querySelector(".form__input--login--password-js");
let loginButton = document.querySelector(".form__button--login-js");

let userName = "", userEmail = "", userPass = "", userToken = "";

loginButton.addEventListener("click", (e) =>
{
    e.preventDefault();

    controlLogin();
});


const controlLogin = async () =>
{
    // ------------------------------ Username validation ------------------------------
    
    // if the username consists of numbers obly
    if(loginName.value.match(/^[0-9]+$/) != null)  
    {
        changeLabelColorBorder(loginName, "User name can't be numbers only", "#d94141", "User name can't be numbers only", "3px solid #d94141");
    }
    // if empty
    else if(loginName.value === null || loginName.value === "")
    {
        changeLabelColorBorder(loginName, "User name can't be empty", "#d94141", "User name can't be empty", "3px solid #d94141");
    }
    else
    {
        changeLabelColorBorder(loginName, "User name", "#333", "User name", "3px solid #ccc");
        userName = loginName.value;
    }

    // ------------------------------ email validation ------------------------------

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(loginEmail.value.match(mailformat)) // valid email
    {
        changeLabelColorBorder(loginEmail, "Email address", "#333", "Email address", "3px solid #ccc");
        userEmail = loginEmail.value;
    }
    else    // invalid email
    {
        changeLabelColorBorder(loginEmail, "Invalid email", "#d94141", "Invalid email", "3px solid #d94141");
    }

    // ------------------------------ password validation ------------------------------
    
    if(loginPass.value.length < 6)
    {
        changeLabelColorBorder(loginPass,
                                "Password must be at least 6 character long",
                                "#d94141",
                                "Password must be at least 6 character long", 
                                "3px solid #d94141");
    }
    else if(loginPass.value.length > 20)
    {
        changeLabelColorBorder(loginPass,
                                "Password must be at most 20 character long",
                                "#d94141",
                                "Password must be at most 20 character long", 
                                "3px solid #d94141");
    }
    else
    {
        changeLabelColorBorder(loginPass, "Password", "#333", "Password", "3px solid #ccc");
        userPass = loginPass.value;
    } 

    // ------------------------------ Dealing with API ------------------------------

    userName="abdallahMahmoud";
    userEmail = "abdowahbah1234@yahoo.com";
    userPass= "abdallahMahmoud";

    if( userName !="" && userEmail !="" &&  userPass !=="" )
    {
        let loginUser = new loginModel(userName, userEmail, userPass);
        try
        {
            await loginUser.login();
            userToken = loginUser.getToken();

            // go to the home page
            window.location.href="./index.html";

            // save the token to the local storage so that you can use it in multiple pages
            localStorage.setItem("token", userToken);
        }
        catch(error)
        {
            console.log(error);
        }
    }
}

// change the label, placeholder and border colors
let changeLabelColorBorder = (element, label, labelColor, placeholder, borderBottom) =>
{
    element.nextElementSibling.textContent = label;
    element.nextElementSibling.style.color = labelColor;
    element.placeholder = placeholder;
    element.style.borderBottom  = borderBottom;
}