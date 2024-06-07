import useInput from "../../hooks/useInput.tsx";
import AuthService from "../../services/AuthService.ts";
import Header from "../../components/header/Header.tsx";

import styles from './Login.module.scss';

export default function Login() {
    const email = useInput('');
    const password = useInput('');

    async function loginHandler() {
        try {
            await AuthService.login(email.value, password.value);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Login</h1>
                    <input {...email} placeholder='Email'/>
                    <input {...password} placeholder='Password'/>
                    <button onClick={loginHandler}>Submit</button>
                </div>
            </div>
        </>
    )
}