import axios from 'axios';
import Signup from '../models/signupModel';
import 'regenerator-runtime/runtime';

let signUpButton = document.querySelector(".form__button--signup-js");
let signUpName = document.querySelector(".form__input--signup--name-js");
let signUpEmail = document.querySelector(".form__input--signup--email-js");
let signUpPass1 = document.querySelector(".form__input--signup--pass1-js");
let signUpPass2 = document.querySelector(".form__input--signup--pass2-js");


let userJob = "", userName = "", userEmail = "", userPass1 = "", userPass2 = "";


signUpButton.addEventListener("click", (e) =>
{
    e.preventDefault();

    controlSignUp();
});

const controlSignUp = async () =>
{

    // ------------------------------ get the userJob ------------------------------

    Array.from(document.querySelectorAll(".form__radio--input--signup-js")).forEach(e =>
    {
        if(e.checked == true)
        {
            userJob = e.id;
        }
        if(userJob === null || userJob === "")
        {
            // alert("you must choose whether you are a seller or a customer");
        }
    });

    // ------------------------------ Username validation ------------------------------
    
    // if the username consists of numbers obly
    if(signUpName.value.match(/^[0-9]+$/) != null)  
    {
        changeLabelColorBorder(signUpName, "User name can't be numbers only", "#d94141", "User name can't be numbers only", "3px solid #d94141");
    }
    // if empty
    else if(signUpName.value === null || signUpName.value === "")
    {
        changeLabelColorBorder(signUpName, "User name can't be empty", "#d94141", "User name can't be empty", "3px solid #d94141");
    }
    else
    {
        changeLabelColorBorder(signUpName, "User name", "#333", "User name", "3px solid #ccc");
        userName = signUpName.value;
    }

    // ------------------------------ email validation ------------------------------

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(signUpEmail.value.match(mailformat)) // valid email
    {
        changeLabelColorBorder(signUpEmail, "Email address", "#333", "Email address", "3px solid #ccc");
        userEmail = signUpEmail.value;
    }
    else    // invalid email
    {
        changeLabelColorBorder(signUpEmail, "Invalid email", "#d94141", "Invalid email", "3px solid #d94141");
    }


    // ------------------------------ password 1 validation ------------------------------
    
    if(signUpPass1.value.length < 6)
    {
        changeLabelColorBorder(signUpPass1,
                                "Password must be at least 6 character long",
                                "#d94141",
                                "Password must be at least 6 character long", 
                                "3px solid #d94141");
    }
    else if(signUpPass1.value.length > 20)
    {
        changeLabelColorBorder(signUpPass1,
                                "Password must be at most 20 character long",
                                "#d94141",
                                "Password must be at most 20 character long", 
                                "3px solid #d94141");
    }
    else
    {
        changeLabelColorBorder(signUpPass1, "Password", "#333", "Password", "3px solid #ccc");
        userPass1 = signUpPass1.value;
    }

    // ------------------------------ password 2 validation ------------------------------

    if(signUpPass2.value.length <= 8)
    {
        changeLabelColorBorder(signUpPass2,
                                "Repeated Password must be at least 8 character long",
                                "#d94141",
                                "Repeated Password must be at least 8 character long", 
                                "3px solid #d94141");
    }
    else if(signUpPass2.value.length > 30)
    {
        changeLabelColorBorder(signUpPass2,
                                "Repeated Password must be at most 30 character long",
                                "#d94141",
                                "Repeated Password must be at most 30 character long", 
                                "3px solid #d94141");
    }
    else if( signUpPass2.value != "" && userPass1 === "")
    {
        changeLabelColorBorder(signUpPass2, "password above is empty", "#d94141", "password above is empty", "3px solid #d94141");
    }
    else
    {
        changeLabelColorBorder(signUpPass2, "Repeat password", "#333", "Repeat password", "3px solid #ccc");
        userPass2 = signUpPass2.value;
    }

    // ------------------------------ Dealing with API ------------------------------

    if( userJob != "" && userName != "" && userEmail !="" &&  userPass2 !=="" && userPass1 === userPass2)
    {
        let newUser = new Signup(userName, userEmail, userPass1, userPass2);
        try
        {
            // let res = postNewAccount(userName, userEmail, userPass1, userPass2);
            await newUser.postNewAccount();

            window.location.href="./login.html";

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

/*
const postNewAccount = async (userName, userEmail, userPass1, userPass2) =>
{
    try
    {
        let res = await axios({
            method: 'post',
            url: 'http://20.37.244.156/api/rest-auth/registration/',
            data: {
                username: userName,
                email: userEmail,
                password1: userPass1,
                password2: userPass2
            }
        });

        console.log(res);
    }
    catch(error)
    {
        console.log(error);
    }
}
*/