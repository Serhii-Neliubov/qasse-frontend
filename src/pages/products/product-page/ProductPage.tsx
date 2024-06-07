import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ProductsService} from "../../../services/ProductsService.ts";
import {IProduct} from "../../../models/IProduct.ts";

export default function ProductPage() {
    const [product, setProduct] = useState<IProduct | null>(null);
    const { id } = useParams();

    useEffect(() => {
        ProductsService.getProductById(id as string)
            .then(product => setProduct(product))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>{product?.title}</h1>
            <span>{product?.category}</span>
        </div>
    )
}