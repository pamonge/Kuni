import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBarStyles.module.css"

const NavBar = () => {
  return (
    <div className={styles.container}>
      {/* <h1>Küni. I Ching y Arte</h1> */}
      <ul className={styles.menu}>
        <li><Link to={'/'}>Presentación</Link></li>
        <li><Link to={'/artgalery'}>Galería de Arte</Link></li>
        <li><Link to={'/papers'}>Ensayos</Link></li>
        <li><Link to={'/contact'}>Contacto</Link></li>
      </ul>
    </div>
  )
}

export default NavBar;