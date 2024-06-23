import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {IProduct} from "@models/IProduct.ts";
import Header from "@components/header/Header.tsx";
import Footer from "@components/footer/Footer.tsx";

import styles from './ProductPage.module.scss';
import {ProductsService} from "@services/ProductsService.ts";
import Rating from "@mui/material/Rating";
import {FaHeart, FaStar} from "react-icons/fa";
import {SlPresent} from "react-icons/sl";
import {TfiCup} from "react-icons/tfi";
import {MdCompareArrows} from "react-icons/md";
import {BsBookmarkStar} from "react-icons/bs";
import {HiOutlineArrowRight} from "react-icons/hi";

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
                                <div className={styles.productRating}>
                                    <div className={styles.productRatingBox}>
                                        <Rating name="read-only" value={5} readOnly/>
                                        (05)
                                    </div>
                                    <div className={styles.productIconsBox}>
                                        <div className={styles.productIconBox}>
                                            <FaHeart/>
                                            494
                                        </div>
                                        <div className={styles.productIconBox}>
                                            <SlPresent/>
                                            179
                                        </div>
                                        <div className={styles.productIconBox}>
                                            <TfiCup/>
                                            176
                                        </div>
                                    </div>
                                    <div className={styles.productUpdateBox}>
                                        Updated on July 18, 2023
                                    </div>
                                </div>
                                <div className={styles.productActionsBox}>
                                    <div>
                                        <BsBookmarkStar style={{color: "black"}} className={styles.productActionsBoxImage}/>
                                        Save
                                    </div>
                                    <div>
                                        <FaStar style={{color: '#FFC107'}} className={styles.productActionsBoxImage} />
                                        Rate
                                    </div>
                                    <div>
                                        <MdCompareArrows style={{color: "black"}} className={styles.productActionsBoxImage}/>
                                        Compare
                                    </div>
                                </div>
                                <div className={styles.productInfoLinks}>
                                    <div className={styles.productInfoLink}>
                                        <div>
                                            <span>For you</span>
                                            <p>Lorem ipsum dolor sit ame</p>
                                        </div>
                                        <HiOutlineArrowRight style={{width: '30px', height: '30px'}}/>
                                    </div>
                                    <div className={styles.productInfoLink}>
                                        <div>
                                            <span>Dupes</span>
                                            <p>Lorem ipsum dolor sit ame</p>
                                        </div>
                                        <HiOutlineArrowRight style={{width: '30px', height: '30px'}}/>
                                    </div>
                                    <div className={styles.productInfoLink}>
                                        <div>
                                            <span>Shop</span>
                                            <p>Lorem ipsum dolor sit ame</p>
                                        </div>
                                        <HiOutlineArrowRight style={{width: '30px', height: '30px'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.productOverviewContent}>
                            <span>Overview</span>
                            <div className={styles.productOverviewBoxes}>
                                <div className={styles.productOverviewBox}>
                                    <div>
                                        <span>What it is</span>
                                    </div>
                                    <p>Facial treatment with 11 ingredients that contains niacinamide</p>
                                </div>
                                <div className={styles.productOverviewBox}>
                                    <div>
                                        <span>COOL FEATURES</span>
                                    </div>
                                    <p>It is vegan, cruelty-free, fungal acne (malassezia) safe, and reef safe</p>
                                </div>
                                <div className={styles.productOverviewBox}>
                                    <div>
                                        <span>SUITED FOR</span>
                                    </div>
                                    <p>It has ingredients that are good for fighting acne, brightening skin, oily skin, reducing pores, scar healing and dark spots</p>
                                </div>
                                <div className={styles.productOverviewBox}>
                                    <div>
                                        <span>FREE FROM</span>
                                    </div>
                                    <p>It doesn't contain any harsh alcohols, common allergens, fragrances, oils, parabens, silicones or sulfates</p>
                                </div>
                                <div className={styles.productOverviewBox}>
                                    <div>
                                        <span>What it is</span>
                                    </div>
                                    <p>The Ordinary is from Canada. This product is used in 10364 routines created by our community.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.productIngredientsList}>
                            <span>Ingredients List (11)</span>
                            <div className={styles.productIngredientsBoxes}>
                                <div className={styles.productIngredientsBox}>Xanthan Gum</div>
                                <div className={styles.productIngredientsBox}>Niacinamide</div>
                                <div className={styles.productIngredientsBox}>Pentylene Glycol</div>
                                <div className={styles.productIngredientsBox}>Zinc PCA</div>
                                <div className={styles.productIngredientsBox}>Dimethyl Isosorbide</div>
                                <div className={styles.productIngredientsBox}>Tamarindus Indica Seed Gum</div>
                                <div className={styles.productIngredientsBox}>Phenoxyethanol</div>
                                <div className={styles.productIngredientsBox}>Isoceteth-20</div>
                                <div className={styles.productIngredientsBox}>Ethoxydiglycol</div>
                                <div className={styles.productIngredientsBox}>Water</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}