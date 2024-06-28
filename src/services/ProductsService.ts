import { IProduct } from "@models/IProduct";
import $api from "@utils/interceptors.ts";
import { ICategory } from "@models/ICategory";


const products : IProduct[] = [ 
    {
    id: '1',
    title: 'Крем дял кожи',
    brand_name: 'Nivea',
    description: 'Super crem',
    image: '',
    upload_image: '',
    avg_rating: 4,
    total_reviews: 1,
    sell_price: '2.02',
    discount_price: '2',
    clicks: 4,
    website_from: 'http://google.com',
    category_id: '1',
    reviews: ['Mne ponravilos'],
  }
 ]

const categories : ICategory[] = [
{
    id: '1',
    name: 'Crema'
},
{
    id: '2',
    name: 'Shampun'
}
]




export class ProductsService {
    static async getProducts(size: number, page: number, category_id?: string[]) {
        try {
            // const { data } = await $api.get(`/api/products`, {
            //     params: {
            //         size,
            //         page,
            //         category_id
            //     }
            // });
            const data = {items:products};

            return data;
        } catch (error) {
            console.error(error);
        }
    }

    static async getProductById(id: string) {
        try {
            // const { data } = await $api.get(`/api/products/${id}`);

            const data = products.find((e) => e.id === id)

            return data;
        } catch (error) {
            console.error(error);
        }
    }

    static async getProductBySearch(value: string) {
        try {
            // const { data } = await $api.get('/api/products/search', {
            //     params: {
            //         text: value,
            //         page: 1,
            //         size: 10
            //     }
            // });
            const data = products.filter((e) =>e.title && e.title.includes(value) || e.description && e.description.includes(value) )

            return data;
        } catch (error) {
            console.error(error);
        }
    }


    static async getProductCategories() {
        try {
            // const { data } = await $api.get('/api/category');
            const data = categories;

            return data;
        } catch (error) {
            console.error(error);
        }
    }
}