import {Link} from "react-router-dom";

import AuthService from "@services/AuthService.ts";

import useInput from "@hooks/useInput.tsx";
import Header from "@components/header/Header.tsx";
import Footer from "@components/footer/Footer.tsx";

import logoImg from '@assets/logo.svg';
import personImage from '@assets/(auth)/person-img.svg';
import flowers from '@assets/(auth)/flowers.svg';
import leftParticlesImage from '@assets/(auth)/left-particle.svg';
import rightParticlesImage from '@assets/(auth)/right-particle.svg';
import leftBParticlesImage from "@assets/(auth)/left-b-particle.svg";

import styles from './ResetPassword.module.scss';

export default function ResetPassword() {
    const email = useInput('');

    async function resetPasswordHandler() {
        try {
            await AuthService.resetPassword(email.value);
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
                      <h1>Reset Password</h1>
                      <p>Please enter your email address to request a password reset</p>
                      <input {...email} placeholder='Email'/>
                      <button onClick={resetPasswordHandler}>Send Reset Password</button>
                      <div className={styles.alreadyHaveAnAccount}>
                          <span>You remember your password?</span>
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