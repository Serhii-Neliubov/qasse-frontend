import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {IProduct} from "@models/IProduct.ts";
import Header from "@components/header/Header.tsx";
import Footer from "@components/footer/Footer.tsx";

import styles from './ProductPage.module.scss';
import {ProductsService} from "@services/ProductsService.ts";

export default function ProductPage() {
    const [product, setProduct] = useState<IProduct | null>(null);
    const { id } = useParams();

    useEffect(() => {
        ProductsService.getProductById(id as string)
            .then((data) => setProduct(data))
            .catch((error) => console.error(error));
    }, []);

    if (!product) {
        return null;
    }

    return (
        <>
            <Header />
            <div className={styles.labelSection}>
                <div className={styles.labelContainer}>
                    <h1 className={styles.title}>Toleriane Hydrating Gentle Face Cleanseringredients Explained</h1>
                    <p className={styles.subtitle}>Explore the top cleansers with detailed ingredient breakdowns, usage guidelines, and reviews from skincare lovers like you.</p>
                </div>
            </div>
            <div className={styles.productContent}>
                <div className={styles.productContainer}>
                    <div className={styles.leftSideBox}>
                        <div className={styles.navBar}>
                            <div className={styles.navItem}>Overview</div>
                            <div className={styles.navItem}>Ingredient List</div>
                            <div className={styles.navItem}>You should know</div>
                            <div className={styles.navItem}>Ingredient info</div>
                            <div className={styles.navItem}>Ingredients Overview</div>
                            <div className={styles.navItem}>Ingredients Explained</div>
                            <div className={styles.navItem}>When to use it</div>
                            <div className={styles.navItem}>How to use it</div>
                            <div className={styles.navItem}>Use it with</div>
                            <div className={styles.navItem}>Don't use with</div>
                            <div className={styles.navItem}>Review</div>
                            <div className={styles.navItem}>Compared with</div>
                        </div>
                        <div className={styles.blockInfo}>
                            <h3>Track your products and build your routine with SkinSort.</h3>
                            <button>Get Started With Free!</button>
                        </div>
                    </div>
                    <div className={styles.productInfoContent}>
                        <div className={styles.productInfoBox}>
                            <div className={styles.productInfoImage}>
                                <img src={product.image} alt='Image' />
                            </div>
                            <div className={styles.productInfo}>
                                <h3>{product.title}</h3>
                                <div className={styles.productRating}></div>
                                <div className={styles.productInfoActions}></div>
                                <div className={styles.productInfoLinks}></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}