import React from 'react';
import styles from '../styles/ImageSection.module.css';
import Image from 'next/image';
import myImage from './hero.png';

const ImageSection = () => (
  <section className={styles.imageSection}>
    <Image
      src={myImage}
      alt="Interface Preview"
      className={styles.imageSection__image}
    />
  </section>
);

export default ImageSection;
