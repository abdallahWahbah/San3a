import axios from 'axios';
import 'regenerator-runtime/runtime';

export default class profileModel
{
    constructor(id)
    {
        this.id = id;
    }

    async getProfile () 
    {
        try
        {
            let token = localStorage.getItem("token");
            const res = await axios(`http://20.37.244.156/api/users/me/`, 
            // const res = await axios(`https://cors-anywhere.herokuapp.com/http://20.37.244.156/api/products/${this.id}/`,
            {
                headers:
                {
                    Authorization: `Token ${token}`
                }
            });
            this.profileData = res.data;
            // console.log(res.data);
        }
        catch(error)
        {
            console.log(error);
        }
    }
}