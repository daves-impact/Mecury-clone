import Image from 'next/image';
import React from 'react';
import styles from '../styles/FinancialFeature.module.css';
import myImage from './financial.png';

export default function SpeedWithoutCompromise() {
  return (
    <section className={styles.speedSection}>
      <h2 className={styles.title}>All your financial workflows. Zero complexity.</h2>
      <p className={styles.subtitle}>
      When your bank account powers your critical financial workflows, you’re already in <br/>the flow.
        </p>
      <div className={styles.subSection}>
      <div className={styles.textContent}>
        <p className={styles.description}>
        Handle all your bills with <br/>precision
        </p>
        <button className={styles.button}>Explore Bill Pay</button>
        <ul className={styles.list}>
          <li>Hold your money for longer by eliminating third-party processing</li>
          <li>Harness AI to populate bill details for you</li>
          <li>Set multi-layered approvals and approve payments instantly via Slack</li>
          <li>Never overpay with duplicate bill detection</li>
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
