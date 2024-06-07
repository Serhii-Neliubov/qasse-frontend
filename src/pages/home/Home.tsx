import Header from "../../components/header/Header.tsx";
import Footer from "../../components/footer/Footer.tsx";

import styles from "./Home.module.scss";

import {IoIosPlayCircle} from "react-icons/io";

import arrowImg from "../../assets/home/hero/arrow.svg";
import bottleImg from "../../assets/home/hero/bottle-img.svg";
import branchImg from "../../assets/home/hero/branch-img.svg";
import personImg from "../../assets/home/hero/person-img.png";
import starBetweenImg from "../../assets/home/hero/star-between.svg";
import starLeftImg from "../../assets/home/hero/star-left.svg";
import starRightImg from "../../assets/home/hero/star-right.svg";
import textDownImg from "../../assets/home/hero/text-img-down.png";
import textUpImg from "../../assets/home/hero/text-img-up.png";
import rightBrunchImg from "../../assets/home/hero/right-branch.svg";

export default function Home() {
    return (
        <div>
            <Header/>
            <div className={styles.hero}>
                <div className={styles.hero_container}>
                    <div className={styles.hero_text}>
                        <h1 className={styles.hero_title}>Search engine built <img src={textUpImg} alt='Text image'/>
                            exclusively for <img src={textDownImg} alt='Text image'/> skincare
                        </h1>
                        <span className={styles.hero_subtitle}>Revolutionizing Skincare, One Ingredient at a Time.Explore. Analyze. Thrive with Qasse.</span>
                        <p className={styles.hero_description}>Qasse is your intelligent companion, guiding you through
                            product compatibility, ingredient
                            education, personalized routines, and in-depth product analysis with aggregated user reviews
                            for
                            a glowing complexion.</p>
                        <div className={styles.hero_buttons}>
                            <button className={styles.hero_button}>Explore Now</button>
                            <button className={styles.hero_button_play}>
                                <IoIosPlayCircle className={styles.hero_button_play_img}/>
                                View Demo
                            </button>
                        </div>
                    </div>

                    <img src={personImg} alt='Image' className={styles.hero_person_img}/>
                    <img src={starLeftImg} alt='Image' className={styles.hero_starLeft_img}/>
                    <img src={starBetweenImg} alt='Image' className={styles.hero_starBetween_img}/>
                    <img src={starRightImg} alt='Image' className={styles.hero_starRight_img}/>
                    <img src={arrowImg} alt='Image' className={styles.hero_arrowRight_img}/>
                    <img src={bottleImg} alt='Image' className={styles.hero_bottleImg_img}/>
                    <img src={branchImg} alt='Image' className={styles.hero_branchImg_img}/>
                    <img src={rightBrunchImg} alt='Image' className={styles.hero_rightBrunchImg_img}/>
                </div>
            </div>

            <div className={styles.checkCompatibility}>Home</div>
            <div className={styles.skicareOptimizer}>Home</div>
            <div className={styles.favouriteProducts}>Home</div>
            <div className={styles.skincareIngridients}>Home</div>
            <div className={styles.skinPotential}>Home</div>
            <div className={styles.companyAdvantages}>Home</div>
            <div className={styles.trendingProducts}>Home</div>
            <nav className={styles.usefulMenuLinks}>Home</nav>
            <div className={styles.joinOurCommunity}>Home</div>
            <Footer/>
        </div>
    )
}