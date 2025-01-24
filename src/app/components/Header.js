import React from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import myImage from './logo.svg';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.header__logo}>
    <Image
    src={myImage} 
    alt="Mercury Logo"
    width={150} 
    height={40} 
  />
    </div>
    <nav className={styles.header__nav}>
      <ul className={styles.header__navList}>
        <li><a href="#products">Products</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
    </nav>
    <div className={styles.header__actions}>
      <button className={styles.header__login}>Log In</button>
      <button className={styles.header__cta}>Open Account</button>
    </div>
  </header>
);

export default Header;
