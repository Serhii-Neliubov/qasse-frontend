import {MouseEvent} from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {AppDispatch} from "@redux/store.ts";
import {registration} from "@redux/slices/userDataSlice.ts";

import useInput from "@hooks/useInput.tsx";
import Header from "@components/header/Header.tsx";
import Footer from "@components/footer/Footer.tsx";

import logoImg from '@assets/logo.svg';
import personImage from '@assets/(auth)/person-img.svg';
import flowers from '@assets/(auth)/flowers.svg';
import leftParticlesImage from '@assets/(auth)/left-particle.svg';
import rightParticlesImage from '@assets/(auth)/right-particle.svg';
import leftBParticlesImage from '@assets/(auth)/left-b-particle.svg';

import styles from './Register.module.scss';

export default function Register() {
    const dispatch = useDispatch<AppDispatch>();

    const email = useInput('');
    const password = useInput('');
    const confirmPassword = useInput('');

    async function registerHandler(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
        event.preventDefault();

        try {
            if(password.value !== confirmPassword.value) {
                return console.error('Passwords do not match');
            }

            const body = {
                email: email.value,
                password: password.value,
            }

            dispatch(registration(body));
        } catch (error){
            console.error(error)
        }
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.content}>
                    <div/>
                    <form className={styles.form}>
                        <img src={logoImg} alt='Image'/>
                        <h1>Signup</h1>
                        <input {...email} placeholder='Email'/>
                        <input {...password} placeholder='Password'/>
                        <input {...confirmPassword} placeholder='Confirm Password'/>
                        <button onClick={event => registerHandler(event)}>Login</button>
                        <div className={styles.alreadyHaveAnAccount}>
                            <span>Already have an account?</span>
                            <Link to='/login' className={styles.link}>Login</Link>
                        </div>
                        <Link className={styles.termsOfUse} to='/privacy-policy'>Terms of Use | Privacy Policy</Link>
                    </form>
                </div>

                <img src={personImage} alt='Image' className={styles.personImg}/>
                <img src={flowers} alt='Image' className={styles.flowersImg}/>
                <img src={leftParticlesImage} alt='Image' className={styles.leftParticlesImg}/>
                <img src={rightParticlesImage} alt='Image' className={styles.rightParticlesImg}/>
                <img src={leftBParticlesImage} alt='Image' className={styles.leftBParticlesImg}/>
            </div>
            <Footer/>
        </>
    )
}