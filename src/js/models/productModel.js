import axios from 'axios';
import 'regenerator-runtime/runtime';

export default class productModel
{
    constructor(id)
    {
        this.id = id;
        this.product = null;
    }

    async getProduct () 
    {
        try
        {
            let token = localStorage.getItem("token");
            const res = await axios(`http://20.37.244.156/api/products/${this.id}/`, 
            // const res = await axios(`https://cors-anywhere.herokuapp.com/http://20.37.244.156/api/products/${this.id}/`,
            {
                headers:
                {
                    Authorization: `Token ${token}`
                }
            });
            this.product = res;
            // console.log(res);
        }
        catch(error)
        {
            console.log(error);
        }
    }
}