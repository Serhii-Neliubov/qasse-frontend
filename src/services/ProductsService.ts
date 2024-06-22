import $api from "@utils/interceptors.ts";

export class ProductsService {
    static async getProducts(size: number, page: number, category_id?: string[]) {
        try {
            const { data } = await $api.get(`/api/products`, {
                params: {
                    size,
                    page,
                    category_id
                }
            });

            return data;
        } catch (error) {
            console.error(error);
        }
    }

    static async getProductById(id: string) {
        try {
            const { data } = await $api.get(`/api/products/${id}`);

            return data;
        } catch (error) {
            console.error(error);
        }
    }
}