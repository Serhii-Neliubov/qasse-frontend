import {Link} from "react-router-dom";
import styles from "./Header.module.scss";

export default function HeaderLink({name, path}: {name: string, path: string}) {
    return (
        <li>
            <Link to={path} className={location.pathname === path
                ? `${styles.navLink_active}`
                : `${styles.navLink}`}
            >
                {name}
            </Link>
        </li>
    )
}