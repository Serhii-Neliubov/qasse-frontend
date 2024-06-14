import styles from './Product.module.scss';
import {Link} from "react-router-dom";
import {FaArrowRight} from "react-icons/fa";

import productImg from '@assets/home/favourite-products/productTest.png';

export default function Product() {
  return (
    <div className={styles.content}>
      <div className={styles.productImage}>
        <img src={productImg} alt="Product" />
      </div>
      <div className={styles.productInfo}>
        <span>Vita Snail First Esseceingredients Explained</span>
        <div>
          * * * * *
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