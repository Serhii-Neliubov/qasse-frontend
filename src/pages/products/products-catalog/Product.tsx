import {Link} from "react-router-dom";

import productImg from "@assets/products-catalog/img.png";
import Rating from "@mui/material/Rating";

import styles from "./ProductsCatalog.module.scss";

export default function Product() {
  return (
    <div className={styles.productsCatalogBlock}>
      <div className={styles.productsCatalogBlockImg}>
        <img src={productImg} alt='Image'/>
      </div>
      <div className={styles.productsCatalogBlockInfo}>
        <div className={styles.productsCatalogCategory}>Cleansers</div>
        <h2 className={styles.productsCatalogTitle}>Tolerant Hydrating Gentle Face
          Cleanser ingredients Explained</h2>
        <div className={styles.productsCatalogRating}>
          <Rating name="read-only" value={5} readOnly />
          <span>(05)</span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</p>
        <div className={styles.productsCatalogActions}>
          <button>
            <Link to='/products'>More Details</Link>
          </button>
          <button>Compare</button>
        </div>
      </div>
      <div className={styles.productsCatalogBlockPrice}>
        See prices:
        <span> $18.00</span>
      </div>
    </div>
  )
}