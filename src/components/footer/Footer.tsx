import {FaRegCopyright} from "react-icons/fa";
import {Link} from "react-router-dom";

import styles from "./Footer.module.scss";

import contactsImg from "../../assets/footer/contacts.svg";
import emailImg from "../../assets/footer/email.svg";
import facebookImg from "../../assets/footer/facebook.svg";
import instagramImg from "../../assets/footer/instagram.svg";
import linkedinImg from "../../assets/footer/linkedin.svg";
import phoneImg from "../../assets/footer/phone-call.svg";
import twitterImg from "../../assets/footer/twitter.svg";
import logoImg from "../../assets/footer/logo.svg";

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.content}>
                <div className={styles.contentBox}>
                    <div className={styles.contentColumn}>
                        <img src={logoImg} alt='Image' className={styles.logo}/>
                        <p className={styles.companyText}>We guide you through solving personalized skincare concerns, find effective products, and understand ingredients while getting skincare smart with science-back research only</p>
                        <div className={styles.socialIcons}>
                            <div className={styles.socialIcon}>
                                <a href=''><img src={facebookImg} alt='Image'/></a>
                            </div>
                            <div className={styles.socialIcon}>
                                <a><img src={twitterImg} alt='Image'/></a>
                            </div>
                            <div className={styles.socialIcon}>
                                <a><img src={linkedinImg} alt='Image'/></a>
                            </div>
                            <div className={styles.socialIcon}>
                                <a><img src={instagramImg} alt='Image'/></a>
                            </div>
                        </div>
                    </div>
                    <nav className={styles.linksColumn}>
                        <span className={styles.columTitle}>Quick Links</span>
                        <ul className={styles.columnLinks}>
                            <li><Link to="/" className={styles.columnLink}>Home</Link></li>
                            <li><Link to="/about" className={styles.columnLink}>About</Link></li>
                            <li><Link to="/products" className={styles.columnLink}>Product</Link></li>
                            <li><Link to="/blog" className={styles.columnLink}>Blog</Link></li>
                            <li><Link to="/contact-us" className={styles.columnLink}>Contact</Link></li>
                        </ul>
                    </nav>
                    <nav className={styles.linksColumn}>
                    <span className={styles.columTitle}>Support</span>
                        <ul className={styles.columnLinks}>
                            <li><Link to="/products"  className={styles.columnLink}>Products</Link></li>
                            <li><Link to="/login"  className={styles.columnLink}>Login</Link></li>
                            <li><Link to="/register"  className={styles.columnLink}>Register</Link></li>
                        </ul>
                    </nav>
                    <div className={styles.contactInfoColumn}>
                        <span className={styles.columTitle}>Contact Info</span>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactInfoItem}>
                                <img src={phoneImg} alt='Image'/>
                                <span>+1 234 567 890</span>
                            </div>
                            <div className={styles.contactInfoItem}>
                                <img src={emailImg} alt='Image'/>
                                <span>info@domain.com</span>
                            </div>
                            <div className={styles.contactInfoItem}>
                                <img src={contactsImg} alt='Image'/>
                                <span>120 King St, Charleston SC 29401, COUNTRY</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.contentCopyright}>
                    <FaRegCopyright/>
                    <span>Qasse. All Right Reserved (2024)</span>
                </div>
            </div>
        </footer>
    )
}