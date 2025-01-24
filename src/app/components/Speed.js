import Image from 'next/image';
import React from 'react';
import styles from '../styles/Speed.module.css';
import myImage from './transfer.png';

export default function SpeedWithoutCompromise() {
  return (
    <section className={styles.speedSection}>
      <h2 className={styles.title}>Speed without compromise</h2>
      <p className={styles.subtitle}>
          Efficiently manage your banking and financial operations from a<br/> single dashboard.
        </p>
      <div className={styles.subSection}>
      <div className={styles.textContent}>
        <p className={styles.description}>
          Complete any banking task in <br/>just a few clicks
        </p>
        <blockquote className={styles.quote}>
          “An operator’s dream. Mercury combines the speed, simplicity, and smarts that I need to get back to running my business. Search for data or actions, all at your fingertips.”
        </blockquote>
        <p className={styles.author}>Lindsay Liu<br />CEO & co-founder, Super</p>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={myImage} // Replace with the correct path to your image
          alt="Transfer between accounts interface"
          width={450}
          height={400}
          className={styles.image}
        />
      </div>
      </div>
    </section>
  );
}
