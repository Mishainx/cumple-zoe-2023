// FlipCard.js
import React, { useState } from 'react';
import styles from './FlipCard.module.css';

const FlipCard = () => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} onClick={handleFlip}>
      <div className={`${styles.cardFace} ${styles.cardFaceFront}`}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfl5Dc77MypkorXMcK2JZwdyx1EFT-XmFhQ&usqp=CAU" alt="Front" />
      </div>
      <div className={`${styles.cardFace} ${styles.cardFaceBack}`}>
        <img src="https://tcg.pokemon.com/assets/img/home/wallpapers/wallpaper-56.jpg" alt="Back" />
      </div>
    </div>
  );
};

export default FlipCard;
