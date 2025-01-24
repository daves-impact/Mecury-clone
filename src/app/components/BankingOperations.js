import Image from 'next/image';
import React from 'react';
import styles from '../styles/BankingOperations.module.css';
import myImage from './operations.png';

export default function BankingOperations() {
  return (
    <section className={styles.bankingOperations}>
      <div className={styles.bankingOperationsContent}>
        <h2 className={styles.bankingOperationsTitle}>
          Let banking power your <br/>financial operations
        </h2>
        <p className={styles.bankingOperationsDescription}>
          Your bank account should do more than hold<br/> your money. Now, it can.
        </p>
        <button className={styles.bankingOperationsButton}>
          Explore Demo <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className={styles.bankingOperationsGraphic}>
        <Image
          src={myImage}
          alt="Banking Operations Diagram"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
}
