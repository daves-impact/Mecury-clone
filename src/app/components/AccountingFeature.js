import Image from 'next/image';
import React from 'react';
import styles from '../styles/AccountingFeature.module.css';
import myImage from './account.png';

export default function SpeedWithoutCompromise() {
  return (
    <section className={styles.speedSection}>
      <div className={styles.subSection}>
      <div className={styles.textContent}>
        <p className={styles.description}>
        Close the books quickly<br/> and accurately
        </p>
        <button className={styles.button}>Explore Accounting Automations</button>
        <ul className={styles.list}>
          <li>Sync transactions to QuickBooks, NetSuite, or Xero</li>
          <li>Create rules to code card transactions and expenses</li>
          <li>See all your bills, cards, employee expenses, and incoming transactions in one place</li>
          <li>Easily review transactions with in-line receipts and notes</li>
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
