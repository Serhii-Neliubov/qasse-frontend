import styles from './Product.module.scss';
import {Link} from "react-router-dom";
import {FaArrowRight} from "react-icons/fa";

import productImg from '@assets/home/favourite-products/productTest.png';
import Rating from '@mui/material/Rating';

export default function Product() {
  return (
    <div className={styles.content}>
      <div className={styles.productImage}>
        <img src={productImg} alt="Product" />
      </div>
      <div className={styles.productInfo}>
        <span>Vita Snail First Esseceingredients Explained</span>
        <div>
          <Rating name="read-only" value={5} readOnly />
          <span>(05)</span>
        </div>
        <Link to='/' className={styles.productInfoLink}>
          Read More
          <FaArrowRight />
        </Link>
      </div>
    </div>
  )
}