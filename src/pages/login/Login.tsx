import {MouseEvent} from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {login} from "@redux/slices/userDataSlice.ts";
import {AppDispatch} from "@redux/store.ts";

import useInput from "@hooks/useInput.tsx";
import Header from "@components/header/Header.tsx";
import Footer from "@components/footer/Footer.tsx";

import logoImg from '@assets/logo.svg';
import personImage from '@assets/(auth)/person-img.svg';
import flowers from '@assets/(auth)/flowers.svg';
import leftParticlesImage from '@assets/(auth)/left-particle.svg';
import rightParticlesImage from '@assets/(auth)/right-particle.svg';
import leftBParticlesImage from "@assets/(auth)/left-b-particle.svg";

import styles from './Login.module.scss';

export default function Login() {
    const dispatch = useDispatch<AppDispatch>();

    const email = useInput('');
    const password = useInput('');

    async function loginHandler(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
        event.preventDefault();

        try {
            const body = {
                email: email.value,
                password: password.value,
            }

            dispatch(login(body));
        } catch (error){
            console.error(error)
        }
    }

    return (
      <>
          <Header />
          <div className={styles.container}>
              <div className={styles.content}>
                  <div className={styles.block}/>
                  <form className={styles.form}>
                      <img src={logoImg} alt='Image'/>
                      <h1>Login</h1>
                      <input {...email} placeholder='Email'/>
                      <input {...password} placeholder='Password'/>
                      <Link to='/reset-password' className={styles.forgotPasswordLink}>Forgot Password?</Link>
                      <button onClick={event => loginHandler(event)}>Login</button>
                      <div className={styles.alreadyHaveAnAccount}>
                          <span>Don’t have an account?</span>
                          <Link to='/register' className={styles.link}>Register</Link>
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