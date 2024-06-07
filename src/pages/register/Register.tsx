import useInput from "../../hooks/useInput.tsx";
import AuthService from "../../services/AuthService.ts";
import Header from "../../components/header/Header.tsx";

import styles from './Register.module.scss';

export default function Register() {
    const email = useInput('');
    const password = useInput('');
    const confirmPassword = useInput('');

    async function registerHandler() {
        try {
            await AuthService.register(email.value, password.value);
        } catch (error){
            console.error(error)
        }
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1>Register</h1>
                <input {...email} placeholder='Email'/>
                <input {...password} placeholder='Password'/>
                <input {...confirmPassword} placeholder='Confirm Password'/>
                <button onClick={registerHandler}>Submit</button>
            </div>
        </>
    )
}