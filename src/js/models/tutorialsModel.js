import axios from 'axios';
import 'regenerator-runtime/runtime';

export default class tutorialsModel
{
    async getTutorials () 
    {
        
        try
        {
            let token = localStorage.getItem("token");

            const res = await axios(`http://20.37.244.156/api/tutorials/`, 
            // const res = await axios('https://cors-anywhere.herokuapp.com/http://20.37.244.156/api/products/',
            {
                headers:
                {
                    Authorization: `Token ${token}`
                }
            });
            this.results = res.data;
        }
        catch(error)
        {
            console.log(error);
        }
    }
}