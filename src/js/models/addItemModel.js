import axios from 'axios';
import 'regenerator-runtime/runtime';

export default class addItemModel
{
    constructor(image)
    {
        this.image = image;
    }

    async addNewItem () 
    {
        try
        {            

            var form = new FormData();
            form.append( "tags", ["new tag", "user tag"]);
            form.append( "name", "hellosad");
            form.append( "slug", "slug")
            form.append( "description", "description")
            form.append( "price", 123 )
            form.append( "available" , true)
            form.append( "featured", true)
            form.append( "bestseller", true)
            form.append( "owner", 1)
            form.append( "color", 1)
            form.append( "product_category", 1)
            form.append( "image", this.image)

            let res = await axios.post('https://cors-anywhere.herokuapp.com/http://20.37.244.156/api/products/',
            // {
            //     tags: ["new tag", "user tag"],
            //     name: "stringasd",
            //     slug: "string",
            //     description: "string",
            //     price: 123,
            //     available: true,
            //     featured: true,
            //     bestseller: true,
            //     owner: 1,
            //     color: 1,
            //     product_category: 1,
            //     image: this.image

            // }, 
            form,
            {
                headers: 
                {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
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



// swagger
/**

  "tags": ["new tag", "user tag"],
  "name": "string",
  "slug": "string",
  "description": "string",
  "price": 123,
  "available": true,
  "featured": true,
  "bestseller": true,
  "owner": 1,
  "color": 1,
  "product_category": 1

 * 
 */