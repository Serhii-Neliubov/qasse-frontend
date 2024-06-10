import Header from "@components/header/Header.tsx";
import Footer from "@components/footer/Footer.tsx";

import {IoIosPlayCircle} from "react-icons/io";

import arrowImg from "@assets/home/hero/arrow.svg";
import bottleImg from "@assets/home/hero/bottle-img.svg";
import branchImg from "@assets/home/hero/branch-img.svg";
import personImg from "@assets/home/hero/person-img.png";
import starBetweenImg from "@assets/home/hero/star-between.svg";
import starLeftImg from "@assets/home/hero/star-left.svg";
import starRightImg from "@assets/home/hero/star-right.svg";
import textDownImg from "@assets/home/hero/text-img-down.png";
import textUpImg from "@assets/home/hero/text-img-up.png";
import rightBrunchImg from "@assets/home/hero/right-branch.svg";

// Join our community
import achievementImg from "@assets/home/join-our-community/achievement.svg";
import groupPeopleImg from "@assets/home/join-our-community/group-people.svg";
import bookImg from "@assets/home/join-our-community/book.svg";
import messageImg from "@assets/home/join-our-community/message.svg";
import likeImg from "@assets/home/join-our-community/like.svg";

import styles from "./Home.module.scss";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
]

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

        <div className={styles.checkCompatibility}>
          <div className={styles.checkCompatibilityContainer}>
            <h2 className={styles.checkCompatibilityTitle}>You can Check Product Compatibility</h2>
            <p className={styles.checkCompatibilityDescription}>Build your best suited routine by checking which
              products are compatible. Check which ones could cause Interactions, that might irritate your skin.</p>

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{width: 705, marginTop: '15px'}}
              renderInput={(params) => <TextField {...params} label="Type to search or Select a product"/>}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{width: 705, marginBottom: '15px'}}
              renderInput={(params) => <TextField {...params}
                                                  label="Type to search or Select another product to compare with"/>}
            />

            <button>Incompatible</button>
          </div>
        </div>
        <div className={styles.skincareOptimizerContainer}>
          <div className={styles.skincareOptimizerContent}>
            <div className={styles.skincareOptimizerText}>
              <h2>Skincare Optimizer</h2>
              <p>Qasse helps you optimize your skincare routine by identifying compatible products and suggesting.</p>
            </div>
            <button>Go to Routine Creator</button>
          </div>
        </div>
        <div className={styles.favouriteProducts}>
          <div className={styles.favouriteProductsContent}>
            <h2>All your favs, in one place</h2>
            <div className={styles.favouriteProductBlocks}>
              <div className={styles.favouriteProductBlock}></div>
            </div>
          </div>
        </div>
        <div className={styles.skincareIngridients}>Home</div>
        <div className={styles.skinPotential}>Home</div>
        <div className={styles.companyAdvantages}>Home</div>
        <div className={styles.trendingProducts}>Home</div>
        <nav className={styles.usefulMenuLinks}>Home</nav>
        <div className={styles.joinOurCommunity}>
          <div className={styles.joinOurCommunityContent}>
            <div className={styles.joinOurCommunityBlocks}>
              <div className={styles.joinOurCommunityBlock}>
                <div className={styles.joinOurCommunityBlockImg}>
                  <img src={achievementImg} alt='Image icon'/>
                </div>
                <span>Brand Spotlight</span>
              </div>
              <div className={styles.joinOurCommunityBlock}>
                <div className={styles.joinOurCommunityBlockImg}>
                  <img src={groupPeopleImg} alt='Image icon'/>
                </div>
                <span>Best Review</span>
              </div>
              <div className={styles.joinOurCommunityBlock}>
                <div className={styles.joinOurCommunityBlockImg}>
                  <img src={bookImg} alt='Image icon'/>
                </div>
                <span>Comparison Guide</span>
              </div>
              <div className={styles.joinOurCommunityBlock}>
                <div className={styles.joinOurCommunityBlockImg}>
                  <img src={messageImg} alt='Image icon'/>
                </div>
                <span>Expert Tips</span>
              </div>
              <div className={styles.joinOurCommunityBlock}>
                <div className={styles.joinOurCommunityBlockImg}>
                  <img src={likeImg} alt='Image icon'/>
                </div>
                <span>Top Pickss</span>
              </div>
            </div>
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
      </div>
    )
}