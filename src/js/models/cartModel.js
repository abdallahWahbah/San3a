import axios from 'axios';
import 'regenerator-runtime/runtime';

export default class cartModel
{
    constructor(count, product)
    {
        this.count = count;
        this.product = product;
    }

    // async postProduct () 
    // {
    //     try
    //     {
    //         // let token = localStorage.getItem("token");
    //         let res = await axios.post('https://cors-anywhere.herokuapp.com/http://20.37.244.156/api/cart/',
    //         {
    //             owner: this.count,
    //             items: this.product
    //         }, 
    //         {
    //             headers: 
    //             {
    //                 // Authorization: `Token ${token}`,
    //                 'Content-Type': 'application/json',
    //                 'Access-Control-Allow-Origin': '*'
    //             }
    //         });

    //         console.log(res);
    //     }
    //     catch(error)
    //     {
    //         console.log(error);
    //     }
    // }

    deleteItem(id)
    {
        const index = this.items.findIndex (el => el.id === id);
        // [2, 4 ,8] splice(1, 2) (start, num of elements) --> returns [4, 8], original array = [2]
        // [2, 4, 4] slice(1, 2) (start, end) --> returns 4 because the end in excluded, original array = [2, 4, 8]
        this.items.splice(index, 1);
    }
}