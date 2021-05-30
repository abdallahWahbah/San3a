import axios from 'axios';
import 'regenerator-runtime/runtime';

export default class Login
{
    constructor(userName, userEmail, userPassword)
    {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userToken = "";
    }

    async login () 
    {
        try
        {
            let res = await axios({
                method: 'post',
                url: 'http://20.37.244.156/api/rest-auth/login/',
                data: {
                    username: this.userName,
                    email: this.userEmail,
                    password: this.userPassword
                }
            });
            this.userToken = res.data.key;
            // console.log(typeof(res.data.key), res.data.key);
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