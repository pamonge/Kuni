import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./ContactFormStyles.module.css";
import Modal from "./Modal";

const ContactForm = () => {

  const initialState = {
    user_name: '',
    user_email: '',
    user_subject: '',
    message: '',
  };

  const [ formData, setFormData ] = useState(initialState);

  const [ errors, setErrors] = useState({});
  const [ isValid, setIsValid ] = useState(false);

  const [ mailSend, setMailSend ] = useState(false);
  const [ mailFailed, setMailFailed ] = useState(false);

  const form = useRef();

  const validate = () => {
    const newErrors = {};

    if (!formData.user_name) {
      newErrors.user_name = 'Nombre y apellido es requerido.';
    }

    if (!formData.user_email) {
      newErrors.user_email = 'Email es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = 'Email invalido.';
    }

    if (!formData.user_subject) {
      newErrors.user_subject = 'Asunto es requerido.';
    }

    if (!formData.message) {
      newErrors.message = 'Mensaje es requerido.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    setIsValid(validate())
  }, [formData]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cfljpjj', 'template_2ibdv5a', form.current, {
        publicKey: 'Vm6Nv-5CRbZ8BOipf',
      })
      .then(
        () => {
          setMailSend(true);
          setFormData(initialState);
          console.log('SUCCESS!');
        },
        (error) => {
          setMailFailed(true);
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className={styles.container}>
      <h2>Contacto</h2>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <label>Nombre</label>
        <input 
          className={styles.field} 
          type="text" 
          name="user_name" 
          value={formData.user_name}
          onChange={handleChange}
          autoComplete='off'/>
          {errors.user_name &&
            <span className={styles.error}>{errors.user_name}</span>
          }

        <label>Email</label>
        <input 
          className={styles.field} 
          type="email" 
          name="user_email" 
          value={formData.user_email}
          onChange={handleChange}
          autoComplete='off'/>
          {errors.user_email &&
            <span className={styles.error}>{errors.user_email}</span>
          }

        <label>Asunto</label>
        <input 
          className={styles.field} 
          type="text" 
          name="user_subject" 
          value={formData.user_subject}
          onChange={handleChange}
          autoComplete='off'/>
          {errors.user_subject &&
            <span className={styles.error}>{errors.user_subject}</span>
          }

        <label>Mensaje</label>
        <textarea 
          className={styles.field} 
          name="message" 
          value={formData.message}
          onChange={handleChange}
          autoComplete='off'/>
          {errors.message &&
            <span className={styles.error}>{errors.message}</span>
          }

        <input className={styles.btn} type="submit" value="Send" disabled={!isValid} />
      </form>

      {mailSend && (
        <Modal isOpen={mailSend} onClose={() => setMailSend(false)}>
          <h4>AVISO</h4>
          <p>Mensaje enviado exitosamente!!!</p>
          <p>Su mensaje será respondido a la brevedad.</p>
        </Modal>
      )}
      {mailFailed && (
        <Modal isOpen={mailFailed} onClose={() => setMailFailed(false)}>
          <h4>AVISO</h4>
          <p>Falló el envio del mensaje.</p>
          <p>Por favor intente nuevamente en unos instantes, sepa disculpar los inconvenientes, muchas gracias.</p>
        </Modal>
      )}
    </div>
    
  );
};

export default ContactForm;
