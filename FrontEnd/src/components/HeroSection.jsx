import React from "react";
import styles from "./HeroSectionStyles.module.css";
import florDeLoto from "../assets/img/flordeloto1.jpg"

const HeroSection = () => {
  return (
    <div>
      <img src={florDeLoto} className={styles.bgImage} alt="flor de loto"/>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Küni</h1>
          <h2>I Ching y Arte</h2>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;