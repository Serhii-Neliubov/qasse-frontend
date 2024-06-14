import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput.tsx";
import styles from "./Header.module.scss";
import { CiSearch } from "react-icons/ci";
import HeaderLink from "./HeaderLink.tsx";
import logo from '../../assets/logo.svg';
import { useState } from "react";

const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact-us' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const search = useInput('');

    const handleToggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={styles.container}>
            <nav className={styles.navMenu}>
                <ul className={styles.navList}>
                    {links.map(link => (
                        <li key={link.path}>
                            <HeaderLink name={link.name} path={link.path} />
                        </li>
                    ))}
                    <li>
                        <a target='_blank' href='https://qasse.blog/' className={styles.navLink}>Blog</a>
                    </li>
                </ul>

                <Link to='/' className={styles.navLogo}>
                    <img src={logo} alt='Logo image' />
                </Link>

                <div className={styles.navActions}>
                    <div className={styles.navSearch}>
                        <input {...search} className={styles.navSearch__input} placeholder='Find products' />
                        <div className={styles.navSearch__image_box}>
                            <CiSearch className={styles.navSearch__image} />
                        </div>
                    </div>

                    <Link to='/register' className={`${styles.navActionLink} ${styles.firstLink}`}>Sign Up</Link>
                    <Link to='/login' className={styles.navActionLink}>Log in</Link>
                </div>
            </nav>
            <div className={styles.secondMenu}>
                <Link to='/' className={styles.navLogo}>
                    <img src={logo} alt='Logo image' />
                </Link>
                <div className={styles.burgerContainer}>
                        <div className={styles.navSearch__image_box}>
                            <CiSearch className={styles.navSearch__image} />
                        </div>
                <div className={`${styles.burger} ${isOpen ? 'active' : ''}`} onClick={handleToggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {isOpen && (
                    <>
                        <div className={styles.burgerMenuOverlay} onClick={handleToggleMenu}></div>
                        <div className={styles.burgerMenu}>
                            <Link to='/login' className={styles.navSecondActionLink}>Log in</Link>
                            <Link to='/register' className={`${styles.navSecondActionLink}`}>Sign Up</Link>
                            <a target='_blank' href='https://qasse.blog/' className={styles.navLink}>Blog</a>
                            {links.map(link => (
                                <li key={link.path}>
                                    <HeaderLink name={link.name} path={link.path} />
                                </li>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
        </div>
    );
}