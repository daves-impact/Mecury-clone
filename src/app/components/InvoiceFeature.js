import Image from 'next/image';
import React from 'react';
import styles from '../styles/InvoiceFeature.module.css';
import myImage from './invoice.png';

export default function SpeedWithoutCompromise() {
  return (
    <section className={styles.speedSection}>
      <div className={styles.subSection}>
      <div className={styles.textContent}>
        <p className={styles.description}>
        Seamless invoicing for you<br/> and your customers
        </p>
        <button className={styles.button}>Explore Invoicing</button>
        <ul className={styles.list}>
          <li>Generate polished invoices in minutes</li>
          <li>Get paid by credit card, Apple Pay, Google Pay, wire, ACH transfer, and ACH debit for subscribers</li>
          <li>Easily send recurring invoices and payment reminders</li>
          <li>Simplify reconciliation with automatically matched payments and invoices</li>
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
