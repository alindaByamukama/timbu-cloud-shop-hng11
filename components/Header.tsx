import React from 'react';
import styles from '../styles/Home.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className="logo">
        <img src="/vistamart-logo.png" alt="Logo" />
        <span>VistaMart</span>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search Product" />
      </div>
    </div>
  );
};

export default Header;
