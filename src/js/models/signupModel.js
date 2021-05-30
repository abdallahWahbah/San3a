import axios from 'axios';
import 'regenerator-runtime/runtime';

export default class Signup
{
    constructor(userName, userEmail, userPass1, userPass2)
    {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPass1 = userPass1;
        this.userPass2 = userPass2;
    }

    async postNewAccount () 
    {
        try
        {
            let res = await axios({
                method: 'post',
                url: 'http://20.37.244.156/api/rest-auth/registration/',
                data: {
                    username: this.userName,
                    email: this.userEmail,
                    password1: this.userPass1,
                    password2: this.userPass2
                }
            });
            console.log(res);
        }
        catch(error)
        {
            console.log(error);
        }
    }
}
