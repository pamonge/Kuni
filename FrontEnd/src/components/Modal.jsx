import React from "react";
import styles from "./ModalStyles.module.css"
import { FaTimes } from "react-icons/fa";

const Modal = ( {children, isOpen, onClose } ) => {
  return (
    <div className={ isOpen ? `${styles.container}` : `${styles.dontShow}` } >
      <div className={styles.modal} >
        <button className={styles.close} onClick={onClose}><FaTimes /></button>
        {children}
      </div>
    </div>
  )
}

export default Modal;