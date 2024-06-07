import axios from "axios";

export class ProductsService {
    static async getProducts(category: string, page: number) {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/store/get-products/`, {
            params: {
                category: JSON.stringify(category), // JSON.stringify must be for truly request to server
                page: page
            }
        });

        return data.response.products;
    }

    static async getProductById(id: string) {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/store/get-product/?product_id=${id}`);

        return data.response.product;
    }

    // TODO: change the link to the real one
    static async getTotalPages(category: string) {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/store/get-total-pages/`, {
            params: {
                category: JSON.stringify(category)
            }
        });

        return data.response.total_pages;
    }
}