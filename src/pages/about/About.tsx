import Header from "../../components/header/Header.tsx";
import styles from "./About.module.scss";

export default function About() {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                About
            </div>
        </div>
    );
}