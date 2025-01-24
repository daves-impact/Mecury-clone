import Image from 'next/image';
import React from 'react';
import styles from '../styles/IndustryFeature.module.css';
import myImage from './industry.png';

export default function SpeedWithoutCompromise() {
  return (
    <section className={styles.speedSection}>
      <h2 className={styles.title}>Tap into industry expertise</h2>
      <p className={styles.subtitle}>
      Get the network and knowledge you need to navigate the obstacles of <br/>company building.
        </p>
      <div className={styles.subSection}>
      <div className={styles.textContent}>
        <p className={styles.description}>
        Connect with investors,<br/> founders, and experts via our<br/> startup success platform
        </p>
        <blockquote className={styles.quote}>
          “I immediately felt welcomed into the founder community. I’ve connected with and exchanged advice with other founders and learned about achieving PMF from AMAs. I highly recommend it.”
        </blockquote>
        <p className={styles.author}>Charles Meyer<br/>Founder, My Better AI</p>
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
