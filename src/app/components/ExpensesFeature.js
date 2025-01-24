import Image from 'next/image';
import React from 'react';
import styles from '../styles/ExpensesFeature.module.css';
import myImage from './expenses.png';

export default function SpeedWithoutCompromise() {
  return (
    <section className={styles.speedSection}>
      <div className={styles.subSection}>
      <div className={styles.textContent}>
        <p className={styles.description}>
        Control spend effortlessly<br/> at any size
        </p>
        <button className={styles.button}>Manage Expenses</button>
        <ul className={styles.list}>
          <li>Issue corporate cards and reimburse expenses</li>
          <li>Tailor permissions to each team member</li>
          <li>Lock cards to specific merchants</li>
          <li>Easily spot duplicate subscriptions</li>
        </ul>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={myImage}
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
