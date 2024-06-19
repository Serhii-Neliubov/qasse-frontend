import {useEffect, useState} from "react";
import { Navigation, Pagination, A11y } from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";

import {ProductsService} from "@services/ProductsService.ts";

import {IProduct} from "@models/IProduct.ts";
import Footer from "@components/footer/Footer.tsx";
import Header from "@components/header/Header.tsx";
import Product from "./Product.tsx";
import Filter from "./Filter.tsx";

import { VscSettings } from "react-icons/vsc";
import productImg from "@assets/products-catalog/img.png";

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./ProductsCatalog.module.scss";

export default function ProductsCatalog() {
    const [, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        ProductsService.getProducts('', 10)
            .then(products => setProducts(products))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <Header/>
            <div className={styles.container}>
              <div className={styles.allProducts}>
                  <div className={styles.allProductContent}>
                      <h1>All Products</h1>
                      <p>Explore the top cleansers with detailed ingredient breakdowns, usage guidelines, and reviews
                          from skincare lovers like you.</p>
                  </div>
              </div>
              <div className={styles.productsCatalog}>
                  <div className={styles.productsCatalogContent}>
                      <Filter />
                      <div className={styles.productsCatalogProducts}>
                          <div className={styles.productsCatalogProductsContent}>
                              <div className={styles.productsCatalogText}>
                                  <h2>All products</h2>
                                  <button>
                                      More Filters
                                      <VscSettings style={{width: '20px', height: '20px'}}/>
                                  </button>
                              </div>
                              <div className={styles.productsCatalogSwiper}>
                                  <Swiper
                                    modules={[Navigation, Pagination, A11y]}
                                    spaceBetween={33}
                                    pagination={{ clickable: true }}
                                    slidesPerView={7}
                                    className={styles.productsSwiper}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                  >
                                      <SwiperSlide className={styles.productsSwiperSlide}>
                                          <img src={productImg} alt='Image'/>
                                      </SwiperSlide>
                                      <SwiperSlide className={styles.productsSwiperSlide}>
                                          <img src={productImg} alt='Image'/>
                                      </SwiperSlide>
                                      <SwiperSlide className={styles.productsSwiperSlide}>
                                          <img src={productImg} alt='Image'/>
                                      </SwiperSlide>
                                      <SwiperSlide className={styles.productsSwiperSlide}>
                                          <img src={productImg} alt='Image'/>
                                      </SwiperSlide>
                                      <SwiperSlide className={styles.productsSwiperSlide}>
                                          <img src={productImg} alt='Image'/>
                                      </SwiperSlide>
                                      <SwiperSlide className={styles.productsSwiperSlide}>
                                          <img src={productImg} alt='Image'/>
                                      </SwiperSlide>
                                      <SwiperSlide className={styles.productsSwiperSlide}>
                                          <img src={productImg} alt='Image'/>
                                      </SwiperSlide>
                                      <SwiperSlide className={styles.productsSwiperSlide}>
                                          <img src={productImg} alt='Image'/>
                                      </SwiperSlide>
                                  </Swiper>
                              </div>
                              <div className={styles.productsCatalogBlocks}>
                                  <Product />
                                  <Product />
                                  <Product />
                                  <Product />
                                  <Product />
                              </div>
                              <div className={styles.productsCatalogPagination}>
                                  <button>See more products</button>
                                  <p>1-30 of 6033</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className={styles.joinOurCommunity}>
              <div className={styles.joinOurCommunityContent}>
                  <div className={styles.joinOurCommunityBlockContainer}>
                      <div className={styles.joinOurCommunityBlockContent}>
                          <div className={styles.joinOurCommunityBlockText}>
                              <h2>Join our community</h2>
                              <p>Build your routine, like + dislike ingredients, and more with your free account.</p>
                          </div>
                          <button>Join Qasse</button>
                      </div>
                  </div>
              </div>
          </div>
            <Footer/>
        </>
    )
}