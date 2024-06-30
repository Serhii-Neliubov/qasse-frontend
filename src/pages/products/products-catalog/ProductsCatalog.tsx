import {useEffect, useState} from "react";
import {A11y, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";

import {ProductsService} from "@services/ProductsService.ts";

import {IProduct} from "@models/IProduct.ts";
import { ICategory } from "@models/ICategory.ts";
import Footer from "@components/footer/Footer.tsx";
import Header from "@components/header/Header.tsx";
import Product from "./Product.tsx";
import Filter from "./Filter.tsx";

import {VscSettings} from "react-icons/vsc";
import productImg from "@assets/products-catalog/img.png";

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./ProductsCatalog.module.scss";


export default function ProductsCatalog() {
    const [currentProductsPage, setCurrentProductsPage] = useState<number>(1);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [filters, setFilters] = useState<string[]>([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const getProducts = async () => {
        try {
            const products = await ProductsService.getProducts(30, currentProductsPage, filters);
            return products.items;
        } catch (error) {
            console.error(error);
        }
    }
    const getCategories = async () => {
        try {
            return await ProductsService.getProductCategories();
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProducts()
            .then(products => setProducts(products))
            .catch(error => console.error(error));
    }, [currentProductsPage, filters]);

    useEffect(() => {
        getCategories()
            .then(categories => setCategories(categories))
            .catch(error => console.error(error));
    }, []);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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
                      <Filter categories={categories} setFilters={setFilters} />
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
                                    slidesPerView={
                                    windowWidth < 576 ? 1.5 :
                                    windowWidth < 1024 ? 3 :
                                    windowWidth < 1370 ? 5 :
                                    7
                                    }
                                    className={styles.productsSwiper}
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
                                  {products?.map(product => (
                                      <Product categories={categories} key={product.id} product={product} />
                                  ))}
                              </div>
                              <div className={styles.productsCatalogPagination}>
                                  <button onClick={() => setCurrentProductsPage(prev => prev + 1)}>See more products</button>
                                  <p>1-{30} of 6033</p>
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