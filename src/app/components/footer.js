import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__column']}>
        <h3 className={styles['footer__title']}>Banking</h3>
        <ul>
          <li>Business Checking & Savings</li>
          <li>Treasury</li>
          <li>Corporate Credit Cards</li>
          <li>Working Capital</li>
          <li>Venture Debt</li>
          <li>Personal Banking</li>
        </ul>
      </div>
      <div className={styles['footer__column']}>
        <h3 className={styles['footer__title']}>Finance Ops</h3>
        <ul>
          <li>Financial Workflows</li>
          <li>Bill Pay</li>
          <li>Invoicing</li>
          <li>Expense Management</li>
          <li>Accounting Automations</li>
          <li>SAFEs</li>
        </ul>
      </div>
      <div className={styles['footer__column']}>
        <h3 className={styles['footer__title']}>Platform</h3>
        <ul>
          <li>Pricing</li>
          <li>Security</li>
          <li>API</li>
          <li>Perks</li>
        </ul>
      </div>
      <div className={styles['footer__column']}>
        <h3 className={styles['footer__title']}>Resources</h3>
        <ul>
          <li>Help Center</li>
          <li>Meridian</li>
          <li>The Bottom Line</li>
          <li>Events</li>
        </ul>
      </div>
      <div className={styles['footer__column']}>
        <h3 className={styles['footer__title']}>Industries</h3>
        <ul>
          <li>Accountants</li>
          <li>Ecommerce</li>
          <li>Life Science</li>
          <li>SaaS</li>
          <li>VC Funds</li>
          <li>Crypto</li>
          <li>Climate</li>
        </ul>
      </div>
      <div className={styles['footer__column']}>
        <h3 className={styles['footer__title']}>Mercury Raise</h3>
        <ul>
          <li>Raise Overview</li>
          <li>Investor Database</li>
          <li>Investor Connect</li>
          <li>Founder Community</li>
          <li>Software Stack</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
