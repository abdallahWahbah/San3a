import axios from 'axios';
import 'regenerator-runtime/runtime';

export default class bestProductsModel
{
    async getBestProducts () 
    {
        
        try
        {
            let token = localStorage.getItem("token");

            const res = await axios(`https://cors-anywhere.herokuapp.com/http://20.37.244.156/api/products/`, 
            {
                headers:
                {
                    Authorization: `Token ${token}`
                }
            });
            // console.log(res);
            this.results = res.data;
        }
        catch(error)
        {
            console.log(error);
        }
    }
}