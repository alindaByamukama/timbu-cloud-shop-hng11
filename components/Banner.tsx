import React from 'react';
import styles from '../styles/Home.module.css';

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerText}>
        <h1>Every Sip is a Step Towards Sustainability</h1>
        <p>Our eco-friendly water bottles offer sustainable hydration solutions. Enjoy pure refreshment while reducing environmental impact</p>
        <button className={styles.button}>Shop Now</button>
      </div>
      <img
        src="/fit-dark-skinned-man-athlete-drinking-water.jpg"
        alt="Athlete drinking water"
        className={styles.bannerImage}
      />
    </div>
  );
};

export default Banner;
