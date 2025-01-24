import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero = () => (
  <section className={styles.hero}>
    <h1 className={styles.hero__title}>Powerful banking.<br/>Simplified finances.</h1>
    <p className={styles.hero__subtitle}>
      Apply in 10 minutes for online business banking that transforms how you operate.
    </p>
    <div className={styles.hero__cta}>
      <input
        className={styles.hero__input}
        type="email"
        placeholder="Enter your email"
      />
      <button className={styles.hero__button}>Open Account</button>
      <button className={styles.hero__sales}>Contact Sales</button>
    </div>
  </section>
);

export default Hero;
