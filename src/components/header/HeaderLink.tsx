import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

export default function HeaderLink({ name, path }: { name: string, path: string }) {
    const location = useLocation();
    return (
        <Link
            to={path}
            className={location.pathname === path
                ? `${styles.navLink_active}`
                : `${styles.navLink}`}
        >
            {name}
        </Link>
    );
}