import React from 'react';
import styles from '../styles/Home.module.css';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage} style={{ backgroundImage: `url(${image})` }}></div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.productFooter}>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
