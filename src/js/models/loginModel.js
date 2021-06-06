import axios from 'axios';
import 'regenerator-runtime/runtime';

export default class Login
{
    constructor(userName, userPassword)
    {
        this.userName = userName;
        this.userPassword = userPassword;
        this.userToken = "";
    }

    async login () 
    {
        try
        {
            // var form = new FormData();
            // form.append("username", this.userName);
            // form.append("password", this.userPassword);
            let res = await axios.post('https://cors-anywhere.herokuapp.com/http://20.37.244.156/auth-token/',
            {
                // username: "san3a",
                // password: "testpass123"
                username: this.userName,
                password: this.userPassword
            }, 
            // form,
            {
                headers: 
                {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });

            // this.userToken = "ed49fcef354fba7c1bcdba960562f47e255231f3"; // san3a token
            // this.userToken = "d7de337a062b1ff6ee5076896aabb5364e67e4db"; // abdo token
            this.userToken = res.data.token;
            console.log(res.data.token);
        }
        catch(error)
        {
            console.log(error);
        }
    }

    getToken()
    {
        return this.userToken;
    }
}