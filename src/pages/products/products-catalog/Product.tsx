import {useNavigate} from "react-router-dom";

import Rating from "@mui/material/Rating";

import {IProduct} from "@models/IProduct.ts";
import {useEffect, useState} from "react";

import styles from "./ProductsCatalog.module.scss";

interface IProductProps {
  product: IProduct;
  categories: any[];
}

export default function Product({product, categories}: IProductProps) {
  const navigate = useNavigate();
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
        <div className={styles.productsCatalogCategoryMiddle}>
          <div className={styles.productsCatalogCategoryMid}>{productCategory}</div>
          <div className={styles.productsCatalogBlockPriceMid}>
            See prices:
            <span> ${product.sell_price}</span>
          </div>
        </div>
        <div className={styles.productsCatalogCategory}>{productCategory}</div>
        <h2 className={styles.productsCatalogTitle}>{product.title}</h2>
        <div className={styles.productsCatalogRating}>
          <Rating name="read-only" value={5} readOnly className={styles.productsCatalogRatingStar}/>
          <span>(05)</span>
        </div>
        <p>{product.description}</p>
        <div className={styles.productsCatalogActions}>
          <button onClick={() => navigate(`/products/${product.id}`)}>
            <span>More Details</span>
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