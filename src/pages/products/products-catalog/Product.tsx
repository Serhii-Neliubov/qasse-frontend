import {Link} from "react-router-dom";

import Rating from "@mui/material/Rating";

import styles from "./ProductsCatalog.module.scss";
import {IProduct} from "@models/IProduct.ts";
import {useEffect, useState} from "react";

interface IProductProps {
  product: IProduct;
  categories: any[];
}

export default function Product({product, categories}: IProductProps) {
  const [productCategory, setProductCategory] = useState<string>('');

  useEffect(() => {
    const category = categories.find(category => category.category_id === product.category_id);
    setProductCategory(category ? category.category_name : '');
  }, [])

  return (
    <div className={styles.productsCatalogBlock}>
      <div className={styles.productsCatalogBlockImg}>
        <img src={product.image} alt='Image' />
      </div>
      <div className={styles.productsCatalogBlockInfo}>
        <div className={styles.productsCatalogCategory}>{productCategory}</div>
        <h2 className={styles.productsCatalogTitle}>{product.title}</h2>
        <div className={styles.productsCatalogRating}>
          <Rating name="read-only" value={5} readOnly />
          <span>(05)</span>
        </div>
        <p>{product.description}</p>
        <div className={styles.productsCatalogActions}>
          <button>
            <Link to='/products'>More Details</Link>
          </button>
          <button>Compare</button>
        </div>
      </div>
      <div className={styles.productsCatalogBlockPrice}>
        See prices:
        <span> ${product.sell_price}</span>
      </div>
    </div>
  )
}