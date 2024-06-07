import {Link} from "react-router-dom";
import useInput from "../../hooks/useInput.tsx";
import styles from "./Header.module.scss";
import {CiSearch} from "react-icons/ci";
import HeaderLink from "./HeaderLink.tsx";

import logo from '../../assets/logo.svg';

const links = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Products', path: '/products'},
    {name: 'Contact', path: '/contact-us'},
]

export default function Header() {
    const search = useInput('');

    return (
        <div className={styles.container}>
            <nav className={styles.navMenu}>
                <ul className={styles.navList}>
                    {links.map(link => (
                        <HeaderLink key={link.path} name={link.name} path={link.path}/>
                    ))}
                    <a target='_blank' href='https://qasse.blog/' className={styles.navLink}>Blog</a>
                </ul>

                <Link to='/' className={styles.navLogo}>
                    <img src={logo} alt='Logo image' />
                </Link>

                <div className={styles.navActions}>
                    <div className={styles.navSearch}>
                        <input {...search} className={styles.navSearch__input} placeholder='Find products'/>
                        <div className={styles.navSearch__image_box}>
                            <CiSearch className={styles.navSearch__image}/>
                        </div>
                    </div>

                    <Link to='/register' className={`${styles.navActionLink} ${styles.firstLink}`}>Sign Up</Link>
                    <Link to='/login' className={styles.navActionLink}>Log in</Link>
                </div>
            </nav>
        </div>
    )
}