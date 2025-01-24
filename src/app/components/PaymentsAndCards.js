import Image from 'next/image';
import React from 'react';
import styles from '../styles/PaymentsAndCards.module.css';
import myImage from './P1.png';
import myImage2 from './P2.png';

export default function PaymentsAndCards() {
  return (
    <section className={styles.paymentsSection}>
      <div className={styles.card}>
        <Image
          src={myImage}
          alt="Amount & source interface"
          width={600}
          height={400}
          className={styles.image}
        />
        <h3 className={styles.title}>Send and receive<br/> payments seamlessly</h3>
        <p className={styles.description}>
          Set auto-transfer rules and send free USD wires.
        </p>
        <button className={styles.button}>Checking & Savings</button>
      </div>

      <div className={styles.card}>
        <Image
          src={myImage2}
          width={600}
          height={400}
          className={styles.image}
        />
        <h3 className={styles.title}>
          Unlock credit cards earlier with<br/> industry-low deposit minimums<sup>1</sup>
        </h3>
        <p className={styles.description}>
          Unlimited 1.5% cashback<sup>2</sup> on all spend.
        </p>
        <button className={styles.button}>Explore Cards</button>
      </div>
    </section>
  );
}
