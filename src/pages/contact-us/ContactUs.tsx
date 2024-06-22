import React from "react";

import { EmailServices } from "@services/EmailServices.ts";

import useInput from "@hooks/useInput.tsx";
import Header from "@components/header/Header.tsx";
import Footer from "@components/footer/Footer.tsx";

import personImage from "@assets/contact-us/person-image.svg";

import styles from "./ContactUs.module.scss";

export default function ContactUs() {
    const name = useInput('');
    const email = useInput('');
    const phoneNumber = useInput('');
    const message = useInput('');

    async function submitHandler(event: React.MouseEvent<HTMLFormElement, MouseEvent>) {
        event.preventDefault();

        try {
            EmailServices.contactUs(name.value, email.value, phoneNumber.value, message.value);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.content}>
                    <img src={personImage} alt='Image'/>
                    <form onClick={event => submitHandler(event)} className={styles.form}>
                      <h1 className={styles.title}>Contact Qasse</h1>
                      <p className={styles.subtitle}>We would love to hear your thoughts, suggestions and feedback regarding our service!</p>
                      <input {...name} placeholder='Enter name' className={styles.input} />
                      <input {...email} placeholder='Enter email' className={styles.input} />
                      <input {...phoneNumber} placeholder='Phone Number' className={styles.input} />
                      <textarea {...message} placeholder='Message' className={styles.textarea} />
                      <button className={styles.button}>Send</button>
                    </form>
                </div>
                <div className={styles.bgLabel} />
            </div>
          <Footer/>
        </>
    );
}