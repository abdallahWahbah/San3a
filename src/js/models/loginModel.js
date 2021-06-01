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
            let res = await axios.post('https://cors-anywhere.herokuapp.com/http://20.37.244.156/auth-token/',
            {
                username: this.userName,
                password: this.userPassword
            }, 
            {
                headers: 
                {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });

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