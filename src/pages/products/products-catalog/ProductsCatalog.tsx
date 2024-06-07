import {useEffect, useState} from "react";
import Product from "../../../components/products/Product.tsx";
import {ProductsService} from "../../../services/ProductsService.ts";
import {IProduct} from "../../../models/IProduct.ts";

import Pagination from "../../../components/products/Pagination.tsx";
import Filter from "../../../components/products/Filter.tsx";
import Search from "../../../components/products/Search.tsx";
import Header from "../../../components/header/Header.tsx";

import styles from "./ProductsCatalog.module.scss";

export default function ProductsCatalog() {
    const [products, setProducts] = useState<IProduct[]>([]);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [filter, setFilter] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        ProductsService.getProducts('', currentPage)
            .then(products => setProducts(products))
            .catch(error => console.error(error));
    }, [currentPage, filter, searchTerm]);

    return (
        <>
            <Header />
            <div className={styles.container}>
                <Search setSearchTerm={setSearchTerm} />
                {products.map((product, index) => <Product key={index} product={product}/>)}

                <Filter setFilter={setFilter}/>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </>
    )
}