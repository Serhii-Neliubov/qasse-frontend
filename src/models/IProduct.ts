export interface IProduct {
  id: number,
  title: string,
  brand_name: string,
  description: string,
  image: string,
  upload_image: string,
  avg_rating: null | number,
  total_reviews: number,
  sell_price: string,
  discount_price: string,
  clicks: number,
  website_from: string,
  categoryId: number,
  category: {
    id: number,
    name: string
  },
  reviews: string[],
  product?: IProduct
}