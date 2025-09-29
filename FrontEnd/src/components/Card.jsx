import React, { useState } from "react";
import styles from "./CardStyles.module.css";
import Modal from "./Modal";

const Card = ( { picture, name, hexagram } ) => {

  const [ showPicture, setShowPicture ] = useState(false);

  return (
    <>
      <Modal isOpen={showPicture} onClose={() => setShowPicture(false)} >
        <img src={picture} alt={name} />
      </Modal>
      <div className={styles.container}>
        <img className={styles.image} src={picture} alt={name} onClick={() => setShowPicture(true)} />
        <h3>{name}</h3>
        <h4>{hexagram}</h4>
      </div>
    </>
    
  )
}

export default Card;