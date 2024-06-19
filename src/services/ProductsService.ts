import $api from "@utils/interceptors.ts";

export class ProductsService {
    static async getProducts(size: number, page: number, category_id?: string[]) {
        const { data } = await $api.get(`/api/products/filter`, {
            params: {
                size,
                page,
                category_id
            }
        });

        return data;
    }

    static async getProductById(id: string) {
        const { data } = await $api.get(`/store/get-product/?product_id=${id}`);

        return data.response.product;
    }

    // TODO: change the link to the real one
    static async getTotalPages(category: string) {
        const { data } = await $api.get(`/store/get-total-pages/`, {
            params: {
                category: JSON.stringify(category)
            }
        });

        return data.response.total_pages;
    }
}