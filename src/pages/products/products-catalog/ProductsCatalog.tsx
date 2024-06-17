import {useEffect, useState} from "react";
import { Navigation, Pagination, A11y } from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";

import {ProductsService} from "@services/ProductsService.ts";

import {IProduct} from "@models/IProduct.ts";
import Footer from "@components/footer/Footer.tsx";
import Header from "@components/header/Header.tsx";
import Product from "@components/products/Product.tsx";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { VscSettings } from "react-icons/vsc";
import productImg from "@assets/products-catalog/img.png";
import Rating from "@mui/material/Rating";

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./ProductsCatalog.module.scss";

export default function ProductsCatalog() {
    const [products, setProducts] = useState<IProduct[]>([]);

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
                      <div className={styles.filterBlocks}>
                          <div className={styles.productsCatalogFilter}>
                              <Accordion className={styles.accordionFilter}>
                                  <AccordionSummary
                                    className={styles.accordionFilterBlock}
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                  >
                                      Category
                                  </AccordionSummary>
                                  <div className={styles.filterCategoryText}>
                                      <div>
                                          <input type='checkbox'/>
                                          <span>Cleansers</span>
                                      </div>
                                      <span>549</span>
                                  </div>
                                  <div className={styles.filterCategoryText}>
                                      <div>
                                          <input type='checkbox'/>
                                          <span>Masks</span>
                                      </div>
                                      <span>549</span>
                                  </div>
                                  <div className={styles.filterCategoryText}>
                                      <div>
                                          <input type='checkbox'/>
                                          <span>Treatments</span>
                                      </div>
                                      <span>549</span>
                                  </div>
                                  <div className={styles.filterCategoryText}>
                                      <div>
                                          <input type='checkbox'/>
                                          <span>Moisturizers</span>
                                      </div>
                                      <span>549</span>
                                  </div>
                                  <div className={styles.filterCategoryText}>
                                      <div>
                                          <input type='checkbox'/>
                                          <span>Eye Care</span>
                                      </div>
                                      <span>549</span>
                                  </div>
                                  <div className={styles.filterCategoryText}>
                                      <div>
                                          <input type='checkbox'/>
                                          <span>wash-off-masks</span>
                                      </div>
                                      <span>549</span>
                                  </div>
                                  <div className={styles.filterCategoryText}>
                                      <div>
                                          <input type='checkbox'/>
                                          <span>sheet-masks</span>
                                      </div>
                                      <span>549</span>
                                  </div>
                              </Accordion>
                              <Accordion className={styles.accordionFilter}>
                                  <AccordionSummary
                                    className={styles.accordionFilterBlock}
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                  >
                                      Preference
                                  </AccordionSummary>
                                  <AccordionDetails>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                                  </AccordionDetails>
                              </Accordion>
                              <Accordion className={styles.accordionFilter}>
                                  <AccordionSummary
                                    className={styles.accordionFilterBlock}
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                  >
                                      Ingredients
                                  </AccordionSummary>
                                  <AccordionDetails>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                                  </AccordionDetails>
                              </Accordion>
                              <Accordion className={styles.accordionFilter}>
                                  <AccordionSummary
                                    className={styles.accordionFilterBlock}
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                  >
                                      Good for
                                  </AccordionSummary>
                                  <AccordionDetails>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                                  </AccordionDetails>
                              </Accordion>
                          </div>
                          <div className={styles.filterBlockInfo}>
                              <h3>Track your products and build your routine with SkinSort.</h3>
                              <button>Get Started With Free!</button>
                          </div>
                      </div>
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
                                  <div className={styles.productsCatalogBlock}>
                                      <div className={styles.productsCatalogBlockImg}>
                                          <img src={productImg} alt='Image'/>
                                      </div>
                                      <div className={styles.productsCatalogBlockInfo}>
                                          <div className={styles.productsCatalogCategory}>Cleansers</div>
                                          <h2 className={styles.productsCatalogTitle}>Tolerant Hydrating Gentle Face
                                              Cleanser ingredients Explained</h2>
                                          <div className={styles.productsCatalogRating}>
                                              <Rating name="read-only" value={5} readOnly/>
                                              <span>(05)</span>
                                          </div>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</p>
                                          <div className={styles.productsCatalogActions}>
                                              <button>More Details</button>
                                              <button>Compare</button>
                                          </div>
                                      </div>
                                      <div className={styles.productsCatalogBlockPrice}>
                                          See prices:
                                          <span> $18.00</span>
                                      </div>
                                  </div>
                                  <div className={styles.productsCatalogBlock}>
                                      <div className={styles.productsCatalogBlockImg}>
                                          <img src={productImg} alt='Image'/>
                                      </div>
                                      <div className={styles.productsCatalogBlockInfo}>
                                          <div className={styles.productsCatalogCategory}>Cleansers</div>
                                          <h2 className={styles.productsCatalogTitle}>Tolerant Hydrating Gentle Face
                                              Cleanser ingredients Explained</h2>
                                          <div className={styles.productsCatalogRating}>
                                              <Rating name="read-only" value={5} readOnly/>
                                              <span>(05)</span>
                                          </div>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</p>
                                          <div className={styles.productsCatalogActions}>
                                              <button>More Details</button>
                                              <button>Compare</button>
                                          </div>
                                      </div>
                                      <div className={styles.productsCatalogBlockPrice}>
                                          See prices:
                                          <span> $18.00</span>
                                      </div>
                                  </div>
                                  <div className={styles.productsCatalogBlock}>
                                      <div className={styles.productsCatalogBlockImg}>
                                          <img src={productImg} alt='Image'/>
                                      </div>
                                      <div className={styles.productsCatalogBlockInfo}>
                                          <div className={styles.productsCatalogCategory}>Cleansers</div>
                                          <h2 className={styles.productsCatalogTitle}>Tolerant Hydrating Gentle Face
                                              Cleanser ingredients Explained</h2>
                                          <div className={styles.productsCatalogRating}>
                                              <Rating name="read-only" value={5} readOnly/>
                                              <span>(05)</span>
                                          </div>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</p>
                                          <div className={styles.productsCatalogActions}>
                                              <button>More Details</button>
                                              <button>Compare</button>
                                          </div>
                                      </div>
                                      <div className={styles.productsCatalogBlockPrice}>
                                          See prices:
                                          <span> $18.00</span>
                                      </div>
                                  </div>
                                  <div className={styles.productsCatalogBlock}>
                                      <div className={styles.productsCatalogBlockImg}>
                                          <img src={productImg} alt='Image'/>
                                      </div>
                                      <div className={styles.productsCatalogBlockInfo}>
                                          <div className={styles.productsCatalogCategory}>Cleansers</div>
                                          <h2 className={styles.productsCatalogTitle}>Tolerant Hydrating Gentle Face
                                              Cleanser ingredients Explained</h2>
                                          <div className={styles.productsCatalogRating}>
                                              <Rating name="read-only" value={5} readOnly/>
                                              <span>(05)</span>
                                          </div>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</p>
                                          <div className={styles.productsCatalogActions}>
                                              <button>More Details</button>
                                              <button>Compare</button>
                                          </div>
                                      </div>
                                      <div className={styles.productsCatalogBlockPrice}>
                                          See prices:
                                          <span> $18.00</span>
                                      </div>
                                  </div>
                                  <div className={styles.productsCatalogBlock}>
                                      <div className={styles.productsCatalogBlockImg}>
                                          <img src={productImg} alt='Image'/>
                                      </div>
                                      <div className={styles.productsCatalogBlockInfo}>
                                          <div className={styles.productsCatalogCategory}>Cleansers</div>
                                          <h2 className={styles.productsCatalogTitle}>Tolerant Hydrating Gentle Face
                                              Cleanser ingredients Explained</h2>
                                          <div className={styles.productsCatalogRating}>
                                              <Rating name="read-only" value={5} readOnly/>
                                              <span>(05)</span>
                                          </div>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</p>
                                          <div className={styles.productsCatalogActions}>
                                              <button>More Details</button>
                                              <button>Compare</button>
                                          </div>
                                      </div>
                                      <div className={styles.productsCatalogBlockPrice}>
                                          See prices:
                                          <span> $18.00</span>
                                      </div>
                                  </div>
                                  <div className={styles.productsCatalogBlock}>
                                      <div className={styles.productsCatalogBlockImg}>
                                          <img src={productImg} alt='Image'/>
                                      </div>
                                      <div className={styles.productsCatalogBlockInfo}>
                                          <div className={styles.productsCatalogCategory}>Cleansers</div>
                                          <h2 className={styles.productsCatalogTitle}>Tolerant Hydrating Gentle Face
                                              Cleanser ingredients Explained</h2>
                                          <div className={styles.productsCatalogRating}>
                                              <Rating name="read-only" value={5} readOnly/>
                                              <span>(05)</span>
                                          </div>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</p>
                                          <div className={styles.productsCatalogActions}>
                                              <button>More Details</button>
                                              <button>Compare</button>
                                          </div>
                                      </div>
                                      <div className={styles.productsCatalogBlockPrice}>
                                          See prices:
                                          <span> $18.00</span>
                                      </div>
                                  </div>
                              </div>
                              <div className={styles.productsCatalogPagination}>
                                  <button>See more products</button>
                                  <p>1-30 of 6033</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {products.map((product, index) => <Product key={index} product={product}/>)}
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