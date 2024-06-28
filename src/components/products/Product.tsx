import {useNavigate} from "react-router-dom";

export default function Product({product}: any) {
    const navigate = useNavigate();

    function productClickHandler(id: string) {
        navigate(`/products/${id}`);
    }

    return (
        <div key={product.id} onClick={() => productClickHandler(product.id)}>
            <h1>фыв</h1>
        </div>
    )
}