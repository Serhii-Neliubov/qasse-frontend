import Header from "@components/header/Header.tsx";
import styles from "./About.module.scss";

// Hero
import bigPetalImg from "@assets/about/petal.svg";
import flower1Img from "@assets/about/flower-1.svg";
import flower2Img from "@assets/about/flower-2.svg";
import starImg from "@assets/about/star.svg";

// Achieving a healthy glowing complexion
import personFlowers from "@assets/about/person-flowers.svg";
import textImg1 from "@assets/about/text-img.svg";
import textImg2 from "@assets/about/text-img1.svg";
import textArrow from "@assets/about/arrow-down.svg";
import Footer from "@components/footer/Footer.tsx";
import {IoIosPlayCircle} from "react-icons/io";

// Glow Intelligently
import personLipstickImg from "@assets/about/glow-intelligently/personImg.svg";
import flowerGlowImg from "@assets/about/glow-intelligently/flower.svg";

// Surface Level
import icon1 from "@assets/about/surface-level/icon1.svg";
import icon2 from "@assets/about/surface-level/icon2.svg";
import icon3 from "@assets/about/surface-level/icon3.svg";
import icon4 from "@assets/about/surface-level/icon4.svg";

export default function About() {
    return (
        <>
          <Header />
          <div className={styles.globalContainer}>
            <div className={styles.heroContainer}>
              <div className={styles.heroContent}>
                <div className={styles.heroText}>
                  <h1>About us</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </p>
                </div>
                <div/>
                <div className={styles.heroContentImg}>
                <img src={flower1Img} alt='Image' className={styles.heroImg2}/>
                <img src={flower2Img} alt='Image' className={styles.heroImg3}/>
                <img src={starImg} alt='Image' className={styles.heroImg4}/>
                </div>
              </div>

              <img src={bigPetalImg} alt='Image' className={styles.heroImg1}/>
            </div>
            <div className={styles.healthyContainer}>
              <div className={styles.healthyContent}>
                <img src={personFlowers} alt='Image' className={styles.healthyWide} />

                  <div className={styles.healthyText}>
                    <div className={styles.healthyTitle}>
                      <div>
                        Achieving a healthy
                        <img src={textImg1} alt='Image' />
                      </div>
                      <div>
                        glowing
                        <img src={textImg2} alt='Image'/>
                        complexion
                      </div>

                      <img src={textArrow} alt='Image' />
                    </div>
                    <p className={styles.healthyParagraph}>
                      Achieving a healthy, glowing complexion shouldn't require wasting money on countless skincare products through trial-and-error. At Qasse, our mission is to help you glow intelligently by arming you with the complete, unbiased information you need to make smart skincare purchases.
                    </p>
                    <img src={personFlowers} alt='Image' className={styles.healthyMiddle} />
                    <p className={styles.healthyParagraph}>
                      We understand the frustration of buying into marketing hype only to be let down by an underperforming or irritating formula. That's why we've created a platform built on transparency, science, and real insights from experts and consumers like you.
                    </p>
                    <div className={styles.heroButtons}>
                      <button className={styles.heroButton}>Explore Now</button>
                      <button className={styles.heroButtonPlay}>
                        <IoIosPlayCircle className={styles.heroButtonPlayImg}/>
                        View Demo
                      </button>
                    </div>
                  </div>
              </div>
            </div>
            <div className={styles.glowIntelligentlyContainer}>
              <div className={styles.glowIntelligentlyContent}>
                <div className={styles.glowIntelligentlyText}>
                  <h2>Our Approach let's glow intelligently!</h2>
                  <img src={personLipstickImg} alt='Image' className={styles.glowIntelligentlyMiddleImg1} />
                  <h3 className={styles.glowText}>Qasse</h3>
                  <p>Qasse provides comprehensive "QuickStart Guides" that deconstruct popular skincare products down to the ingredient level. We analyze formulas, review clinical data, and fact-check brand claims through an evidence-based lens.</p>
                  <button>View all products</button>
                </div>
                <div />

                <img src={personLipstickImg} alt='Image' className={styles.glowIntelligentlyImg1} />
                <img src={flowerGlowImg} alt='Image' className={styles.glowIntelligentlyImg2} />
                <h3>Qasse</h3>
              </div>
            </div>
            <div className={styles.surfaceLevelContainer}>
              <div className={styles.surfaceLevelContent}>
                <div className={styles.surfaceLevelText}>
                  <h2>But we don't just rely on surface-level details. Our guides also include:</h2>
                  <p>We leave no stone unturned to ensure you have all the facts before adding to your skincare regimen.</p>
                </div>
                <div className={styles.surfaceLevelBlocks}>
                  <div className={styles.surfaceLevelBlock}>
                    <div className={styles.surfaceLevelBlockContent}>
                      <div className={styles.surfaceLevelBlockImg}>
                        <img src={icon1} alt='Image icon'/>
                      </div>
                      <p>Unbiased performance reviews from a community of real users</p>
                    </div>
                  </div>
                  <div className={styles.surfaceLevelBlock}>
                    <div className={styles.surfaceLevelBlockContent}>
                      <div className={styles.surfaceLevelBlockImg}>
                        <img src={icon2} alt='Image icon'/>
                      </div>
                      <p>In-depth routines showcasing ideal complementary product combinations</p>
                    </div>
                  </div>
                  <div className={styles.surfaceLevelBlock}>
                    <div className={styles.surfaceLevelBlockContent}>
                      <div className={styles.surfaceLevelBlockImg}>
                        <img src={icon3} alt='Image icon'/>
                      </div>
                      <p>Affordable "dupe" recommendations for premium product alternatives</p>
                    </div>
                  </div>
                  <div className={styles.surfaceLevelBlock}>
                    <div className={styles.surfaceLevelBlockContent}>
                      <div className={styles.surfaceLevelBlockImg}>
                        <img src={icon4} alt='Image icon'/>
                      </div>
                      <p>Insider tips and feedback from cosmetic chemists and dermatologists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.skincareOptimizerContainer}>
              <div className={styles.skincareOptimizerContent}>
                <div className={styles.skincareOptimizerText}>
                  <h2>Skincare routine optimizer</h2>
                  <p>Qasse helps you optimize your skincare routine by identifying compatible products and suggesting.</p>
                </div>
                <button>Go to Routine Creator</button>
              </div>
            </div>
            <div className={styles.joinOurCommunityContainer}>
              <div className={styles.joinOurCommunityContent}>
                <div className={styles.joinOurCommunityText}>
                  <h2>Join our community</h2>
                  <p>Build your routine, like + dislike ingredients, and more with your free account.</p>
                </div>
                <button>Join Qasse</button>
              </div>
            </div>
          </div>
          <Footer/>
        </>
    );
}